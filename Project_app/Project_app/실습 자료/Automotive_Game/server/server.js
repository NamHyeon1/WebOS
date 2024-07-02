// server.js
const express = require("express");
const WebSocket = require("ws");
const http = require("http");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static("public")); // directory that including HTML, CSS, JS files

wss.on("connection", function connection(ws) {
  // Assign unique ID per each connection
  const clientId = Date.now();

  ws.on("message", function incoming(data) {
    // [개발] 클라이언트로 부터 전달받은 메시지를 다른 클라이언트에게 전달 기능 구현
  });

  // Send connection notice message to all of clients
  const welcomeMessage = JSON.stringify({
    id: clientId,
    message: `${clientId} is connected.`,
  });
  wss.clients.forEach(function each(client) {
    // [개발] 연결되었다는 메시지를 client 모두에게 전달 구현
  });
});

server.listen(3000, function listening() {
  console.log("Server starts on the 3000 port.");
});
