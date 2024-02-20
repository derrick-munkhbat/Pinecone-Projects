const { log } = require("console");
const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/articles", (req, res) => {
  const data = fs.readFileSync("articles.json", "utf8");
  res.json(JSON.parse(data));
});

//POST
app.post("/articles/create", (req, res) => {
  const {title, desc } = req.body;

  const data = fs.readFileSync("articles.json", "utf8");
  const list = JSON.parse(data);

  list.push({
    
    title: title,
    desc: desc,
  });

  fs.writeFileSync("articles.json", JSON.stringify(list));
  res.json([{ status: "Success" }]);
});



//DELETE
app.delete('/articles/delete/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Deleted user with ID ${id}`);
});



//UPDATE
app.get("/articles/update/:id", (req, res) => {
  const id = req.params.id;

    res,render(`Updated user with ID ${id}`);

});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
