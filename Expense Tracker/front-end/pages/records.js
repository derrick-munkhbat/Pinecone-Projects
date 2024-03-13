import { Cards } from "./components/Cards";
import { Form } from "./components/Form";
import { useState } from "react";
import { CheckBox } from "./components/CheckBox";

export default function Home() {
  const [isShowModal, setIsShowModal] = useState(false);
  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <div className="flex p-5">
      {/* LEFT-BAR */}
      <div className="flex flex-col p-5 justify-start">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold">Records</span>
          <button
            onClick={toggleModal}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add
          </button>
          <input
            type="search"
            placeholder="Search"
            className="py-2 px-4 rounded w-full border rounded"
          />
        </div>

        <div className="">
          {/* TYPES */}
          <div className="flex flex-col gap-1">
            <span className="font-bold">Types</span>
            <div className="flex bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              <CheckBox />
            </div>
            <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Income
            </div>
            <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Expense
            </div>
          </div>

          {/* CATEGORY */}
          <div className="flex flex-col gap-1">
            <span className="font-bold">Category</span>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Food & Drinks
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Shopping
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Housing
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Transportation
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Vehicle
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Life & Entertainment
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Communication, PC
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Financial expenses
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Investments
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Income
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Others
            </button>
          </div>

          {/* AMOUNT RANGE */}
          <div className="flex items-center gap-1 p-2">
            <span className="font-bold">Amount Range</span>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              0
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              1000
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT-BAR */}
      <div className="flex p-4 relative">
        <div className="overflow-x-auto">
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
        <div className="absolute inset-0">{isShowModal && <Form />}</div>
      </div>
    </div>
  );
}
