const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use("/", express.static(__dirname));

app.get("/", (req: any, res: any) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket: any) => {
  console.log("a user connected");

  socket.on("chat message", (msg: any) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
