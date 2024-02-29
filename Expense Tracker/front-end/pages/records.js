import { Cards } from "./components/Cards";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
// import { DatePicker } from "./components/DatePicker";

export default function Home() {
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
          <button className="btn btn-primary">Add record</button>

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
        <div>
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
        <div className="absolute card w-[792px] h-[512px] bg-orange-200 rounded justify-start items-stretch text-5xl">
          <div className="flex items-center justify-between gap-10 border-2 border-slate-400">
            <h1>Add Record</h1>
            <h1>Close</h1>
          </div>

          <div className="flex gap-10 justify-center">
            <div>
              <p>amount</p>
              <input
                type="text"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
              />
              <p>category</p>
              <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <div className="flex gap-5">
                {/* <DatePicker /> */}
                <p>date</p>
                <p>date</p>
              </div>
            </div>
            <div className="">
              <p>payee</p>
              <select class="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Who shot first?
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
              <p>note</p>
              <textarea
                placeholder="Bio"
                class="textarea textarea-bordered textarea-lg w-full max-w-xs"
              ></textarea>
            </div>
          </div>
          <button className="btn btn-primary">Add record</button>
        </div>
      </div>

      <div className="flex justify-center h-[60px] p-3 mb-10">
        <Footer />
      </div>
    </div>
  );
}
