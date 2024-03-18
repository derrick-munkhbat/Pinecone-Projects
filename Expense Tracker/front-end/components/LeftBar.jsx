import { useEffect, useState } from "react";
import { Chip } from "./Chip";

export function LeftBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col p-5 justify-start">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold">Records</span>
          <input
            type="search"
            placeholder="Search"
            className="py-2 px-4 w-full border rounded"
          />
        </div>

        <div className="">
          {/* TYPES */}
          <div className="flex flex-col gap-1">
            <span className="font-bold">Types</span>
            <Chip label="All" />
            <Chip label="Income" />
            <Chip label="Expenses" />
          </div>

          {/* CATEGORY */}
          <div className="flex flex-col gap-1">
            <span className="font-bold">Category</span>

            {categories.map((category) => (
              <Chip label="categories" />
            ))}

            {/* <Chip label="categories" />
            <Chip label="categories" />
            <Chip label="categories" />
            <Chip label="categories" />
            <Chip label="categories" />
            <Chip label="categories" />
            <Chip label="categories" />
            <Chip label="categories" />
            <Chip label="categories" />
            <Chip label="categoriess" /> */}
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
    </>
  );
}
