const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");

router.get("/", async (req, res) => {
  const result = await sql`select * from categories`;
  res.json(result);
});

//CATEGORY POST
router.post("/", async (req, res) => {
  const { name } = req.body;
  await sql`insert into categories (name) values (${name})`;
  res.json([{ status: "success" }]);
});

//CATEGORY DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await sql`delete from categories where id = ${id}`;
  res.json([{ status: "success" }]);
});

//CATEGORY UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await sql`update categories set name = ${name} where id = ${id}`;
  res.json([{ status: "success" }]);
});

module.exports = router;
