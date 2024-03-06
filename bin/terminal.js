import chalk from "chalk";
import boxen from "boxen";

// console.log(chalk.blue.bgGreen.underline("Hello world!"));

console.log(
	boxen(chalk.blue.bgGreen.underline("Hello world!"), {
		padding: 1,
		margin: 1,
		borderStyle: "doubleSingle",
		title: "Hello world!",
	})
);
