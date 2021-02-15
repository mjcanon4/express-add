const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
  console.log(__dirname);
});

app.post("/", function (req, res) {
  res.send("thanks for sending that in");
});

app.listen(3001, function () {
  console.log("Started");
});
