const express = require("express");

const app = express();

app.listen(3001, function () {
  console.log("Started");
});

app.get("/" function(req, res) {
    res.send("Hello I have arrived")
})