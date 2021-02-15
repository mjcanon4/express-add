const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname);
  console.log(__dirname);
});

app.listen(3001, function () {
  console.log("Started");
});
