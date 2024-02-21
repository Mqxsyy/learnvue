function write(text) {
	process.stdout.write(text);
}

// 30-33: text color
write("\x1b[30m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[31m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[32m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[33m");
write("Hello");
write("\x1b[0m");
write("\n");

// 40-43: background color
write("\x1b[40m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[41m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[42m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[43m");
write("Hello");
write("\x1b[0m");
write("\n");

// 90-93: bright text color
write("\x1b[90m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[91m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[92m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[93m");
write("Hello");
write("\x1b[0m");
write("\n");

// 100-103: bright bg color
write("\x1b[100m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[101m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[102m");
write("Hello");
write("\x1b[0m");
write("\n");

write("\x1b[103m");
write("Hello");
write("\x1b[0m");
write("\n");

// 256 color
for (let i = 0; i < 255; i++) {
	if (i % 16 === 0) {
		write("\n");
	}

	write(`\x1B[38;5;${i}m`);
	write(i.toString().padStart(4, " "));
	write("\x1b[0m");
}

// 256 color
for (let i = 0; i < 255; i++) {
	if (i % 16 === 0) {
		write("\n");
	}

	write(`\x1B[48;5;${i}m`);
	write(" ");
	write("\x1b[0m");
}

// truecolor
write("\n");

for (let i = 0; i < 255; i++) {
	write(`\x1B[48;2;${i};${i};${i}m`);
	write(" ");
	write("\x1b[0m");
}

// text styles
write("\n");
write("Hello");
write("\x1B[0m");
write("\x1B[22m");

write("\n");
write("\x1B[1m");
write("Hello");
write("\x1b[0m");
write("\x1B[22m");

write("\n");
write("\x1B[2m");
write("Hello");
write("\x1b[0m");
write("\x1B[23m");

write("\n");
write("\x1B[3m");
write("Hello");
write("\x1b[0m");

write("\n");
write("\x1B[4m");
write("Hello");
write("\x1b[0m");

write("\n");
write("\x1B[5m");
write("Hello");
write("\x1b[0m");

write("\n");
write("\x1B[7m");
write("Hello");
write("\x1b[0m");

write("\n");
write("\x1B[8m");
write("Hello");
write("\x1b[0m");

write("\n");
write("\x1B[9m");
write("Hello");
write("\x1b[0m");

write("\n");
write("\x1B[105m");
write("\x1B[31m");
write("\x1B[9m");
write("Hello");
write("\x1b[0m");
