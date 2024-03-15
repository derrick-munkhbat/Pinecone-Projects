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
  const response = await sql`insert into categories (name) values (${name})`;
  res.json(response);
});

//CATEGORY DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const response = await sql`delete from categories where category_id = ${id}`;
  res.json(response);
});

//CATEGORY UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const response =
    await sql`update categories set name = ${name} where category_id = ${id}`;
  res.json(response);
});

module.exports = router;
