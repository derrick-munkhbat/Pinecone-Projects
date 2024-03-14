export function Cards() {
  return (
    <div className="container w-[1000px] my-3 border rounded">
      <div className="mb-2 bg-base-100">
        <div className="card-body">
          <div className="flex gap-5 items-center">
            <input type="checkbox" className="checkbox checkbox-md" />
            <div className="flex-1">
              <h2 className="text-xl">category</h2>
              <h2>date and time</h2>
            </div>
            <div className=" text-xl">amount</div>
          </div>
        </div>
      </div>
    </div>
  );
}
