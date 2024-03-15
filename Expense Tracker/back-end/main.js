const cors = require("cors");
const transactionRouter = require("./routers/transactionRouter");
const categoriesRouter = require("./routers/categoriesRouter");
const usersRouter = require("./routers/usersRouter");
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.use("/transactions", transactionRouter);
app.use("/categories", categoriesRouter);
app.use("/users", usersRouter);

app.get("/", async (req, res) => {
  res.send("Hello there, backend running");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
