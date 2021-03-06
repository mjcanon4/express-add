const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  console.log(res.body.num1);
  res.send("thanks for sending that in");
});

app.listen(3001, function () {
  console.log("Started");
});
