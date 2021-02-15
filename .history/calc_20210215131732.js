const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile("index.html");
});

app.listen(3001, function () {
  console.log("Started");
});
