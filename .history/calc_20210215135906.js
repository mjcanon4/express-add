const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalc.html");
});

app.post("/bmiCalculator", function (req, res) {
  var height = req.body.height;
  var weight = req.body.weight;
  var bmi = height * weight;
  console.log(height, weight);
  res.send("Your BMI is " + bmi);
});

app.post("/", function (req, res) {
  var num1 = req.body.num1;
  var num2 = req.body.num2;
  var result = Number(num1) + Number(num2);
  res.send("The result is " + result);
});

app.listen(3001, function () {
  console.log("Started");
});
