import { Cards } from "./Cards";
import { useState } from "react";
import axios from "axios";
import { Date } from "./DatePicker";
import { Toggle } from "./Toggle";

export function RightBar() {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

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
    <div className="flex p-4 relative">
      <div className="overflow-x-auto">
        <button
          onClick={toggleModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add New Record
        </button>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      {/* FORM */}
      {isShowModal && (
        <div className="absolute bg-blue-500 card mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Add Record</h2>

          <form className="flex bg-white p-6 rounded shadow-md gap-5 justify-center">
            <div>
              <div className="flex justify-center">
                <Toggle />
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
                  <option value="housing">Housing</option>
                  <option value="transportation">Transportation</option>
                  <option value="vehicle">Vehicle</option>
                  <option value="life-entertainment">
                    Life & Entertainment
                  </option>
                  <option value="communication-pc">Communication, PC</option>
                  <option value="financial">Financial expenses</option>
                  <option value="investment">Investments</option>
                  <option value="income">Income</option>
                  <option value="other">Others</option>
                  <option value="others">+ Add Category</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-700 font-bold mb-2"
                >
                  Choose date & time
                </label>
                <Date />
              </div>

              <div className="flex justify-center gap-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={createNewTransaction}
                >
                  Add Record
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={!isShowModal}
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
      )}
    </div>
  );
}
