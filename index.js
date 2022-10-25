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

app.get("/courseCategories/:id", (req, res) => {
  const id = req.params.id;
  const category = courseDetails.filter(
    (details) => details.category_id === id
  );
  res.send(category);
});
app.get("/coursedetails", (req, res) => {
  res.send(courseDetails);
});
app.get("/coursedetails/:id", (req, res) => {
  const id = req.params.id;
  const selectcourses = courseDetails.find((select) => select.id === id);
  res.send(selectcourses);
});

app.listen(port, () => {
  console.log("Courses Server is Running");
});
