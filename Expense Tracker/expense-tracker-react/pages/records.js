import { Cards } from "./components/Cards";

export default function Home() {


  return (
    <body className="m-auto text-black">
      <div>
          <button className="mb-10 btn btn-primary">
            Record
          </button>
      </div>

      <div className="flex justify-center gap-10">

        <div class="artboard rounded-xl phone-6 bg-slate-200">
          <h1>Records</h1>
          <button className="mb-10 btn btn-primary">
            Add
          </button>

          <div>
            leftbar
          </div>
        </div>


        <div>
          <div>
            <h1>Today</h1>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
          </div>
          <div>
            <h1>Yesterday</h1>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
          </div>
        </div>


      </div>
    </body>
  );
}
