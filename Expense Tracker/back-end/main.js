const express = require("express");
const fs = require("fs");
var cors = require("cors");
const postgres = require("postgres");
require("dotenv").config();
// const transactionRouter = require("./routers/transactionRouter");
const usersRouter = require("./routers/usersRouter");

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;
PGDATABASE = decodeURIComponent(PGDATABASE);

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: "require",
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// app.use("/transactions", transactionRouter);
app.use("/users", usersRouter);

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== user.email) {
    res.sendStatus(401);
    return;
  }

  if (password !== user.password) {
    res.sendStatus(401);
    return;
  }

  console.log({ email, password });
  res.json(["Successs"]);
});

app.get("/", async (req, res) => {
  res.send("Hello there, backend running");
});

//USER POST
app.post("/create-user", async (req, res) => {
  const { name, email, password } = req.body;
  // console.log(req.body);
  const response =
    await sql`insert into users (name, email, password) values (${name}, ${email}, ${password})`;
  res.json(response);
  // res.send("ok");
});

//TRANSACTION POST
app.post("/create-transaction", async (req, res) => {
  const { amount } = req.body;
  const response =
    await sql`insert into transactions (amount) values (${amount})`;
  res.json(response);
});

//CATEGORY POST
app.post("/create-category", async (req, res) => {
  const { name } = req.body;
  const response = await sql`insert into categories (name) values (${name})`;
  res.json(response);
});

//USER DELETE
app.delete("/delete-user/:id", async (req, res) => {
  const { id } = req.params;
  const response = await sql`delete from users where id = ${id}`;
  res.json(response);
});

//TRANSACTION DELETE
app.delete("/delete-transaction/:id", async (req, res) => {
  const { id } = req.params;
  const response =
    await sql`delete from transactions where transaction_id = ${id}`;
  res.json(response);
});

//CATEGORY DELETE
app.delete("/delete-category/:id", async (req, res) => {
  const { id } = req.params;
  const response = await sql`delete from categories where category_id = ${id}`;
  res.json(response);
});

//USER UPDATE
app.put("/update-user/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password, avatar_img } = req.body;
  const response =
    await sql`update users set name = ${name}, email = ${email}, password = ${password}, avatar_img = ${avatar_img} where id = ${id}`;
  res.json(response);
});

//TRANSACTION UPDATE
app.put("/update-transaction/:id", async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  const response =
    await sql`update transactions set amount = ${amount} where transaction_id = ${id}`;
  res.json(response);
});

//CATEGORY UPDATE
app.put("/update-category/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const response =
    await sql`update categories set name = ${name} where category_id = ${id}`;
  res.json(response);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
