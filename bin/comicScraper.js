import axios from "axios";
import * as cheerio from "cheerio";
import fs from "node:fs";

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

if (!fs.existsSync("cache")) {
	fs.mkdirSync("cache");
}

const baseUrl = "https://www.gocomics.com";
let link = "/the-adventures-of-business-cat/2022/07/28";

for (let i = 1; i <= 10; i++) {
	const cacheName = `${link.replaceAll("/", "")}`;
	const cacheFile = `cache/${cacheName}.html`;
	let data;

	if (!fs.existsSync(cacheFile)) {
		console.log("Fetching page", i);
		await sleep(1000);

		let res = await axios.get(baseUrl + link);
		data = res.data;

		fs.writeFileSync(cacheFile, data);
	} else {
		data = fs.readFileSync(cacheFile);
	}

	const $ = cheerio.load(data);
	const img = $("a>picture>img");

	console.log(img.attr("src"));
	console.log(img.attr("alt"));

	const backButton = $("a.js-previous-comic");
	link = backButton.attr("href");
}
