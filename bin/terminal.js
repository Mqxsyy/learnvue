// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797

function write(text) {
	process.stdout.write(text);
}

let date = new Date();

write(date.toTimeString().substring(0, 8));

setInterval(() => {
	date = new Date();

	write("\x1B[?25l");
	write("\x1B[8D");
	write(date.toTimeString().substring(0, 8));
	write("\x1B[?25h");
}, 10);
