export function Cards() {
  return (
    <div className="container mx-auto my-3">
      <div className="mb-2 shadow card bg-base-100">
        <div className="card-body rounded-full bg-slate-100">
          <div className="flex gap-2 items-center">
            <input type="checkbox" checked="checked" class="checkbox checkbox-md" />
            <div className="flex-1 text-black text-2xl">Category</div>
            <div className="text-slate-900 text-xl">amount</div>
          </div>
        </div>
      </div>
    </div>
  );
}
