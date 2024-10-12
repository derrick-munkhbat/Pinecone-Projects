export function IncomeCard() {
  return (
    <div className="bg-gray-100 p-8 w-[384px] h-[216px]">
      <div className="bg-white p-4 rounded">
        <h1 className="text-2xl font-bold mb-4">Your Income</h1>
        <div className="flex justify-between mb-2">
          <p className="text-gray-500">Your Income</p>
          <p className="text-green-500">32% from last month</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-2xl font-bold">1,200,000</p>
          <p className="text-2xl font-bold text-green-500">
            ↑ 32% from last month
          </p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-500">Your Income Amount</p>
          <p className="text-green-500">32% from last month</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-2xl font-bold">1,200,000</p>
          <p className="text-2xl font-bold text-green-500">
            ↑ 32% from last month
          </p>
        </div>
      </div>
    </div>
  );
}
