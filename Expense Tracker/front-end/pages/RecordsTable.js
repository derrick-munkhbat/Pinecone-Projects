import { Form } from "./components/Form";
import { useState } from "react";

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
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              All
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Income
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              Expense
            </button>
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
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Amount
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">- 35,500</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Lending & Renting</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">3/10/2024 14:00</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">1,000</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Food & Drinks</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">3/10/2024 17:00</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>{isShowModal && <Form />}</div>
      </div>

      {/* FORM */}
    </div>
  );
}
