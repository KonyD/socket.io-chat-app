var socket = io();

var form = document.getElementById("form");
var input = document.getElementById("input");

var username = prompt("Enter your username.");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  var item = document.createElement("li");
  item.textContent = username + ": " + msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
