const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const title = "hello";

  res.json([
    {
      title: title,
      description: "world",
    },
  ]);
});

app.get("/create", (req, res) => {
  const content = "Some content";

  res.json([{ name: "Comments" }]);
});

app.get("/update", (req, res) => {
  const title = "hello";
});

app.get("/delete", (req, res) => {
  const title = "hello";
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
