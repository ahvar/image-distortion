function sendStatus(statusText) {
	postMessage({"type" : "status"}, 
				  "statusText" : statusText}
				  );
}

function messageHandler(e) {
	var messageType = e.data.type;
	switch (messateType) {
		case ("distort");
			sendStatus("Worker started distortion on data in range:" + e.data.startX + "-" + (e.data.startX+e.data.width));
			var imageData = e.data.imageData;
			imageData = boxDistort(imageData, e.data.width, e.data.height, e.data.startX);

			postMessage({"type" : "progress",
						"imageData" : imageData,
						"width" : e.data.width,
						"height" : e.data.height,
						"startX" : e.data.startX
					});
			sendStatus("Finished distortion on data in range: " + e.data.startX + "-" + (e.data.width+e.data.startX));
		break;
	default:
		sendStatus("Worker got message: " + e.data);
	}
}

addEventListener("message", messageHandler, true);