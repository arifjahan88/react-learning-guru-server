const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Api is Running");
});

app.listen(port, () => {
  console.log("Courses Server is Running");
});
