import axios from "axios";
import * as cheerio from "cheerio";
import fs from "node:fs";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync("cache")) {
	fs.mkdirSync("cache");
}

const baseUrl = "https://wumo.com";
let link = "/wumo/2024/03/13";

for (let i = 0; i < 10; i++) {
	const cacheName = link.replaceAll("/", "");
	const cacheFile = `cache/${cacheName}.html`;
	let data;

	if (!fs.existsSync(cacheName)) {
		await sleep(1000);

		let res = await axios.get(baseUrl + link);
		data = res.data;

		fs.writeFileSync(cacheFile, data);
	} else {
		data = fs.readFileSync(cacheFile);
	}

	const $ = cheerio.load(data);
	let img = $("div.box-content>a>img");

	console.log(img.attr("src"));
	console.log(img.attr("alt"));

	const a = $("a.prev");
	link = a.attr("href");
}
