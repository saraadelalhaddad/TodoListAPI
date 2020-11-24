const express = require("express");
const todos = require("./todos");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(8000, () => {
  console.log("The application is running");
});
