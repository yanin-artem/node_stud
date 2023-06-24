const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080",
  },
});

app.get("/", async (req, res) => {
  return res.send(123);
});

app.listen(3000, async () => {
  console.log("server started");
});

io.on("connection", (socket) => {
  socket.on("message", (data) => {
    socket.join("room:" + data.room_id);
    io.to("room:" + data.room_id).emit("message", {
      message: data.message,
      chatMembersCount: io.engine.clientsCount,
    });
  });

  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

httpServer.listen(3001);
