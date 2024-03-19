import axios from "axios";
import fs from "node:fs";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync("cache")) {
	fs.mkdirSync("cache");
}

for (let i = 1; i <= 10; i++) {
	const cacheFile = `cache/${i}.json`;
	let data;

	if (!fs.existsSync(cacheFile)) {
		console.log("Fetching page", i);
		await sleep(1000);

		let res = await axios.post("https://kinnisvara24.ee/search", {
			page: i,
		});
		data = res.data;

		fs.writeFileSync(cacheFile, JSON.stringify(data));
	} else {
		data = JSON.parse(fs.readFileSync(cacheFile));
	}

	data.data.forEach((advertisement) => {
		console.log(advertisement.hind);

		if (advertisement.address.address) {
			console.log(advertisement.address.address);
		} else {
			console.log(advertisement.address.short_address);
		}
	});
}
