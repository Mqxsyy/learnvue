import ProgressBar from "progress";

const bar = new ProgressBar("  downloading [:bar] :rate/bps :percent :etas", {
	total: 50,
});

const timer = setInterval(() => {
	bar.tick();

	if (bar.complete) {
		clearInterval(timer);
	}
}, 100);
