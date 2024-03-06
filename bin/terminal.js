// https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797

import readline from "node:readline";

function write(text) {
	process.stdout.write(text);
}

readline.emitKeypressEvents(process.stdin);

console.clear();
write("@");

process.stdin.on("keypress", (ch, key) => {
	if (key && key.ctrl && key.name == "c") {
		console.clear();
		process.exit();
	}

	if (key && key.name == "w") {
		write("\x1B[1D");
		write(" ");
		write("\x1B[1D");
		write("\x1B[1A");
		write("@");
	}

	if (key && key.name == "s") {
		write("\x1B[1D");
		write(" ");
		write("\x1B[1D");
		write("\x1B[1B");
		write("@");
	}

	if (key && key.name == "a") {
		write("\x1B[1D");
		write(" ");
		write("\x1B[2D");
		write("@");
	}

	if (key && key.name == "d") {
		write("\x1B[1D");
		write(" ");
		write("@");
	}
});

process.stdin.setRawMode(true);
process.stdin.resume();
