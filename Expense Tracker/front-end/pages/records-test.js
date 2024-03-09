import { Cards } from "./components/Cards";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
// import {DatePicker} from "./components/DatePicker";
import { Date } from "./components/DatePicker";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  function createNewTransaction(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/create-transaction", { amount })
      .then((response) => {
        alert("succes broda!");
        window.location.reload();
      })
      .catch((err) => alert("error broda!"));
  }

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    // main layout
    <div className="w-[1600px] m-auto text-black bg-slate-400 p-5 gap-10">
      {/* header */}
      <div className="flex justify-center h-[60px] p-3 mb-10">
        <Header />
      </div>

      {/* body layout*/}
      <div className="relative flex justify-center gap-10 p-3">
        {/* left-side */}
        <div class="artboard rounded-xl phone-6 bg-slate-50 p-3">
          <h1>Records</h1>
          <button className="btn btn-primary" onClick={toggleModal}>
            Add record
          </button>

          <label class="input input-bordered flex items-center gap-2">
            <input type="text" class="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-4 h-4 opacity-70"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </label>

          <div>leftbar</div>
        </div>

        {/* right side */}
        <div className="">
          <div>
            <h1 className="flex p-3">Today</h1>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
          <div>
            <h1 className="flex p-3">Yesterday</h1>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>

        {/* ADD RECORD FORM */}
        {/* {isShowModal && (
        <div className="absolute bg-orange-200 card w-full max-w-md mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Add Record</h2>
          <form
          //  onSubmit={handleSubmit} 
           className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label htmlFor="payee" className="block text-gray-700 font-bold mb-2">
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

      <div className="mb-4">
        <label htmlFor="expenseOrIncome" className="block text-gray-700 font-bold mb-2">
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
        <label htmlFor="amount" className="block text-gray-700 font-bold mb-2">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          step="0.01"
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          // value={amount}
          // onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-bold mb-2">
          Category
        </label>
        <input
          type="text"
          id="category"
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          // value={category}
          // onChange={(e) => setCategory(e.target.value)}
        />
            </div>
          </form>
        </div>
        )} */}

        {/* {isShowModal && (
          <form
            // onChange={createNewTransaction}
            className="absolute card w-[792px] h-[512px] bg-orange-200 rounded justify-start items-stretch text-5xl"
          >
            <div className="flex items-center justify-between gap-10 border-2 border-slate-400">
              <h1>Add Record</h1>
              <button>Close</button>
            </div>

            <div className="flex gap-10 justify-center">
              <div>
                <select class="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Expense or Income
                  </option>
                  <option>Expense</option>
                  <option>Income</option>
                </select>
                <p>amount</p>
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  placeholder="ex: $1,000"
                  class="input input-bordered w-full max-w-xs"
                />
                <p>category</p>
                <select class="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Choose Category
                  </option>
                  <option>Utilities</option>
                  <option>Food</option>
                  <option>Car related</option>
                  <option>Health related</option>
                  <option>Loan</option>
                </select>
                <div className="flex gap-5">
                  <div className="flex flex-col gap-3">
                    <p>date</p>
                    <Date />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p>date</p>
                    <Date />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    className="btn btn-primary w-3/4"
                    onClick={createNewTransaction}
                  >
                    Sumbit
                  </button>
                </div>
              </div>
              <div className="">
                <p>payee</p>
                <select class="select select-bordered w-full max-w-xs">
                  <option disabled selected>
                    Write here
                  </option>
                  <option>Han Solo</option>
                  <option>Greedo</option>
                </select>
                <p>note</p>
                <textarea
                  placeholder="Write here"
                  class="textarea textarea-bordered textarea-lg w-full max-w-xs h-[230px]"
                ></textarea>
              </div>
            </div>
          </form>
        )} */}
      </div>

      <div className="flex justify-center h-[60px] p-3 mb-10">
        <Footer />
      </div>
    </div>
  );
}
