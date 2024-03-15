export function Cards() {
  return (
    <div className="container w-[600px] my-3 border rounded">
      <div className="mb-2 bg-base-100">
        <div className="card-body-sm">
          <div className="flex gap-5 items-center p-2">
            <input type="checkbox" className="checkbox checkbox-md ml-4" />
            <div className="flex-1">
              <h2 className="text-xl">category</h2>
              <h2>date and time</h2>
            </div>
            <div className=" text-xl mr-4">amount</div>
          </div>
        </div>
      </div>
    </div>
  );
}
