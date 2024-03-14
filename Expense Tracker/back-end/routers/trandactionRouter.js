const express = require("express");
const router = express.Router();
const { sql } = require("../config/database");

//TRANSACTION POST
router.post("/", async (req, res) => {
  const { amount } = req.body;
  const response =
    await sql`insert into transactions (amount) values (${amount})`;
  res.json([{ status: "Success" }]);
});

//TRANSACTION DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await sql`delete from transactions where transaction_id = ${id}`;
  res.sendStatus(204);
});

//TRANSACTION UPDATE
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { amount } = req.body;
  await sql`update transactions set amount = ${amount} where transaction_id = ${id}`;
  res.sendStatus(204);
});

module.exports = router;
