import { Chip } from "./Chip";
import { NewRecordButton } from "./NewRecordButton";

export function LeftBar() {
  return (
    <>
      <div className="flex flex-col p-5 justify-start">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold">Records</span>
          <NewRecordButton />
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
            <div className="flex bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ">
              <Chip label="hello" />
            </div>
            <Chip label="hello" />
            <Chip label="hello" />
            <Chip label="hello" />
          </div>

          {/* CATEGORY */}
          <div className="flex flex-col gap-1">
            <span className="font-bold">Category</span>
            <Chip label="hello" />
            <Chip label="hello" />
            <Chip label="hello" />
            <Chip label="hello" />
            <Chip label="hello" />
            <Chip label="hello" />
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
