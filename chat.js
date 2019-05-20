//CLIENT SIDE
const socket = io.connect("https://teematrix.vinixtech.net");
console.log("CLIENT SOCKET\n", socket);
//const socket = io.connect("http://localhost:5000");

const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");

btn.addEventListener("click", () => {
	//sending message to server
	socket.emit("chat", { message: message.value, handle: handle.value });
});

message.addEventListener("keypress", () => {
	socket.emit("typing", handle.value);
});
//listening for events
socket.on("chat", data => {
	//clears input field
	feedback.innerHTML = "";
	output.innerHTML += `<p><strong>${data.handle}: ${data.message}</strong></p>`;
});

socket.on("typing", data => {
	//
	feedback.innerHTML = `<p><em>${data} is typing... </em></p>`;
});
