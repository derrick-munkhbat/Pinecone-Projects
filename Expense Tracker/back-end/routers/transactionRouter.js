const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");

router.get("/", async (req, res) => {
  const result = await sql`select * from transactions`;
  res.json(result);
});

//TRANSACTION POST
router.post("/", async (req, res) => {
  const { amount, category } = req.body;
  await sql`insert into transactions (amount,category_id) values (${amount}, ${category})`;
  res.json([{ status: "success" }]);
});

//TRANSACTION DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await sql`delete from transactions where transaction_id = ${id}`;
  res.json([{ status: "success" }]);
});

//TRANSACTION UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  await sql`update transactions set amount = ${amount} where transaction_id = ${id}`;
  res.json([{ status: "success" }]);
});

module.exports = router;
