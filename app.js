const http = require("http");

const express = require("express");

app = express();

app.use((req, res, next) => {
  console.log("inthe mioddleware");
  res.send("<h1>Hellooo</h1>");
});

const server = http.createServer(app);

server.listen(3000);
