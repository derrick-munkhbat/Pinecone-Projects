export function Cards() {
  return (
    <div className="container w-[1000px] my-3 border rounded">
      <div className="mb-2 bg-base-100">
        <div className="card-body">
          <div className="flex gap-5 items-center">
            <input type="checkbox" class="checkbox checkbox-md" />
            <div className="flex-1 text-xl">Category</div>
            <div className=" text-xl">amount</div>
          </div>
        </div>
      </div>
    </div>
  );
}
