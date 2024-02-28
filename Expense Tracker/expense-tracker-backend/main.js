const express = require("express");
const fs = require("fs");
var cors = require("cors");
const postgres = require("postgres");
require("dotenv").config();

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

// async function getPgVersion() {
//   const result = await sql`select version()`;
//   console.log(result);
// }

// getPgVersion();

app.get("/", async (req, res) => {
  res.send("Hello there");
});

// app.get("/users", async (req, res) => {
//   const result = await sql`select * from users`;
//   res.json(result);
// });

//POST
app.post("create-user", async (req, res) => {
  const { name, email, password, avatar_img } = req.body;
  const response =
    await sql`insert into users (name, email, password, avatar_img) values (${name}, ${email}, ${password}, ${avatar_img})`;
  res.json(response);
});

// //UPDATE
// app.put("/users/update/:id", async (req, res) => {
//   const { id } = req.params;
//   const { name } = req.body;
//   await sql`update tasks set name = ${name})`;
//   res.json(result);
// });

//DELETE
// app.delete("/:id", async (req, res) => {
//   const { id } = req.params;
//   await sql`delete from tasks where id =${id})`;
//   res.json(result);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
