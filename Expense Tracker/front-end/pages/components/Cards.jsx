export function Cards() {
  return (
    <div className="container w-[1000px] my-3">
      <div className="mb-2 shadow card bg-base-100">
        <div className="card-body rounded-full">
          <div className="flex gap-2 items-center">
            <input type="checkbox" class="checkbox checkbox-md" />
            <div className="flex-1 text-xl">Category</div>
            <div className=" text-xl">amount</div>
          </div>
        </div>
      </div>
    </div>
  );
}
