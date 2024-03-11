import { useState } from "react";
import axios from "axios";
import { Date } from "./DatePicker";

export function Form() {
  const [amount, setAmount] = useState(0);
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  function createNewTransaction(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/create-transaction", { amount })
      .then((response) => {
        alert("success broda!");
        window.location.reload();
      })
      .catch((err) => alert("error broda!"));
  }

  return (
    <div className=" bg-orange-200 card mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Add Record</h2>

      <form
        //  onSubmit={handleSubmit}
        className="flex bg-white p-6 rounded shadow-md gap-5 justify-center"
      >
        <div>
          <div className="mb-4">
            <label
              htmlFor="expenseOrIncome"
              className="block text-gray-700 font-bold mb-2"
            >
              Expense / Income
            </label>
            <div className="relative">
              <select
                id="expenseOrIncome"
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                // value={expenseOrIncome}
                // onChange={(e) => setExpenseOrIncome(e.target.value)}
              >
                <option value="Expense">Expense</option>
                <option value="Income">Income</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.657 6.586 4.293 7.95l.707.707L10 13.172z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-gray-700 font-bold mb-2"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              placeholder="ex: $1,000"
              step="0.01"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              // value={amount}
              // onChange={(e) => setAmount(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="category"
              className="block text-gray-700 font-bold mb-2"
            >
              Category
            </label>
            <select
              id="expenseOrIncome"
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="food-drinks">Food & Drinks</option>
              <option value="shopping">Shopping</option>
              <option value="shopping">Housing</option>
              <option value="shopping">Transportation</option>
              <option value="shopping">Vehicle</option>
              <option value="shopping">Life & Entertainment</option>
              <option value="shopping">Communication, PC</option>
              <option value="shopping">Financial expenses</option>
              <option value="shopping">Investments</option>
              <option value="shopping">Income</option>
              <option value="shopping">Others</option>
              <option value="shopping">+ Add Category</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-bold mb-2"
            >
              Choose Date
            </label>
            <Date />
          </div>

          <div className="flex justify-center gap-2">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={createNewTransaction}
            >
              Submit
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={createNewTransaction}
            >
              Cancel
            </button>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <label
              htmlFor="payee"
              className="block text-gray-700 font-bold mb-2"
            >
              Payee
            </label>
            <input
              type="text"
              id="payee"
              className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              // value={payee}
              // onChange={(e) => setPayee(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="payee"
              className="block text-gray-700 font-bold mb-2"
            >
              Notes
            </label>
            <textarea
              className="border rounded"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
}
