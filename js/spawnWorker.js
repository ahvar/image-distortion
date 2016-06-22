var imageURL = ""

function spawnWorker(src) {
	var worker = new Worker(src);
	worker.addEventListener("message", messageHandler, true);
	worker.addEventListener("error", errorHandler, true);
	return worker;
}

function errorHandler(e) {
	console.log("error: " + e.message);
}