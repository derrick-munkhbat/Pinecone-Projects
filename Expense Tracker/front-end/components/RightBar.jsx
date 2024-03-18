import { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";

// const categories = [
//   {
//     id: 1,
//     name: "home",
//   },
//   {
//     id: 2,
//     name: "personal",
//   },
//   {
//     id: 3,
//     name: "work",
//   },
// ];

// const options = categories.map((category) => {
//   return {
//     value: category.category_id,
//     label: category.name,
//   };
// });

// console.log({ options });

export function RightBar() {
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [category, setCategories] = useState("");

  const [isExpense, setIsExpense] = useState(true);
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  function loadTask() {
    axios.get("http://localhost:3000/transactions").then((response) => {
      setTransactions(response.data);
    });
  }

  useEffect(() => {
    loadTask();
  }, []);

  function createNewTransaction() {
    console.log({ amount, category });
    // axios
    //   .post("http://localhost:3000/transactions", {
    //     amount,
    //     category,
    //   })
    //   .then(() => {
    //     alert("success!");
    //     loadTask();
    //     // window.location.reload();
    //   })
    //   .catch((err) => alert("error"));
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
        {/* CARDS */}
        {transactions.map((transaction) => (
          <div
            key={transaction.transaction_id}
            className="container w-[600px] my-3 border rounded"
          >
            <div className="mb-2 bg-base-100">
              <div className="card-body-sm">
                <div className="flex gap-5 items-center p-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-md ml-4"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl">category</h2>
                    <h2>date and time</h2>
                  </div>
                  <div className=" text-xl mr-4">{transaction.amount}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FORM */}
      {isShowModal && (
        <div className="absolute bg-blue-500 card mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Add Record</h2>

          <div className="flex bg-white p-6 rounded shadow-md gap-5 justify-center">
            <div>
              <div className="flex justify-center">
                {/* TOGGLE */}
                <div className="flex items-center mb-4">
                  <label
                    htmlFor="expense-toggle"
                    className="block text-gray-700 font-bold p-5"
                  >
                    Expense
                  </label>
                  <div className="relative">
                    <input
                      id="expense-toggle"
                      type="checkbox"
                      className="sr-only"
                      checked={isExpense}
                      onChange={() => setIsExpense(!isExpense)}
                    ></input>
                    <div className="block bg-gray-200 w-24 h-8 rounded-full"></div>
                    <div
                      id="expense-dot"
                      className={`dot absolute left-1 top-1 w-12 h-6 rounded-full transition duration-200 ease-in-out ${
                        isExpense ? "bg-red-500" : "bg-green-500"
                      }`}
                      style={{ left: isExpense ? "1px" : "13px" }}
                    ></div>
                  </div>
                  <label
                    htmlFor="income-toggle"
                    className="block text-gray-700 font-bold p-5"
                  >
                    Income
                  </label>
                  <input
                    id="income-toggle"
                    type="checkbox"
                    className="sr-only"
                  ></input>
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
                  placeholder="ex: $1,000"
                  step="0.01"
                  className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Category
                </label>
                <select
                  id="categories"
                  className="block appearance-none w-full border border-gray-200 text-gray-700 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  // value={category}
                  // onChange={(e) => setCategory(e.target.value)}
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
                {/* <Date /> */}
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
                  onClick={() => setIsShowModal(false)}
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
          </div>
        </div>
      )}
    </div>
  );
}
