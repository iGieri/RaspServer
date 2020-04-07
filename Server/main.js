const express = require("express");
const fs = require("fs");
const exec = require("child_process").exec;
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

let gabbotService;
let gabbotStatus;

function execute(command, callback) {
	exec(command, function(error, stdout, stderr) {callback(stdout);});
}

io.on("connection", socket => {
	//console.log("a user connected :D");
	socket.on("get", msg => {
		console.log("Request from " + socket.handshake.address);
		if (msg == "Gabbot") {
			gabbotService = fs.readFileSync("/home/pi/Desktop/Gabbot.txt");
			execute("ps aux | grep gabbot.js", function (stdout) {
				if (stdout.includes("node gabbot.js")) gabbotStatus = "ON";
				else gabbotStatus = "OFF";
			});
			socket.emit("get", gabbotStatus + ":" + gabbotService);
		}
	});

	socket.on("off", msg => {
		console.log("Turning off " + msg);
		if (msg == "Gabbot") {
			execute("ps aux | grep gabbot.js", function (stdout) {
				let temp = stdout.split(" ");
				let temp2 = 0;

				let BreakException = {};

				try {
					temp.forEach(element => {
						let numbers = /^[0-9]+$/;
						if (element.match(numbers)) {
							temp2 = parseInt(element);
							throw BreakException;
						}
					});
				}

				catch (e) {
					if (e !== BreakException) throw e; 
				}
				
				exec("kill " + temp2, function(error, stdout, stderr) {
					console.log(stdout);
				});
				exec("kill " + ++temp2, function(error, stdout, stderr) {
					console.log(stdout);
				});
			});
		}
	});
});

server.listen(port, () => console.log("Server is running on port " + port));


