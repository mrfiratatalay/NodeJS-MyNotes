const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("HELLO FIRAT ATALAY...");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("LISTENING TO REQUESTS ON THIS PORT...");
});
