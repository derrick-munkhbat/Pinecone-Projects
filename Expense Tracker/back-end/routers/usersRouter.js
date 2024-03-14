const express = require("express");
const { sql } = require("../config/database");
const router = express.Router();

//USER POST
app.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(req.body);
  const response =
    await sql`insert into users (name, email, password) values (${name}, ${email}, ${password})`;
  res.json(response);
  // res.send("ok");
});

//USER DELETE
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await sql`delete from users where id = ${id}`;
  res.json(response);
});

//USER UPDATE
app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password, avatar_img } = req.body;
  const response =
    await sql`update users set name = ${name}, email = ${email}, password = ${password}, avatar_img = ${avatar_img} where id = ${id}`;
  res.json(response);
});




router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  //check duplicate email
  const users = await sql`SELECT * FROM users WHERE email=${email}`;
  if (users.length > 0) {
    res.status(400).json({ message: "User already exists" });
    return;
  }

  //password validation
  if (password.length < 8) {
    res.status(400).json({ message: "more than 8 letters" });
    return;
  }

  //register user
  await sql`insert into users(id, email, password)`;

  const user = await sql`SELECT * FROM users WHERE email=${email}`;

  if (user.password === password) {
    res.json(user[0]);
  } else {
    res.status(500).json({ message: "tani ner nuuts ug buruu baina" });
  }
});

module.exports = router;
