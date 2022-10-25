const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());

const courseCategories = require("./Data/courseCatagories.json");
const courseDetails = require("./Data/coursesdetails.json");

app.get("/", (req, res) => {
  res.send("Api is Running");
});
app.get("/coursecategories", (req, res) => {
  res.send(courseCategories);
});

app.listen(port, () => {
  console.log("Courses Server is Running");
});
