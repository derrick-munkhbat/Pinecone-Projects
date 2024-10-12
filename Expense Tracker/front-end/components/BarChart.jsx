export function BarChart() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-4 rounded">
        <div className="flex justify-between mb-2">
          <p className="text-gray-500">Income - Expense</p>
          <p className="text-green-500">3'000'000</p>
        </div>
        <div className="grid grid-cols-7 gap-2 mb-2">
          <div className="bg-gray-200 p-2 rounded">
            <p className="text-gray-500">Jul</p>
            <p className="text-2xl font-bold">3'000'000</p>
          </div>
          <div className="bg-gray-200 p-2 rounded">
            <p className="text-gray-500">Jul</p>
            <p className="text-2xl font-bold">2'000'000</p>
          </div>
          <div className="bg-gray-200 p-2 rounded">
            <p className="text-gray-500">Jul</p>
            <p className="text-2xl font-bold">1'000'000</p>
          </div>
          <div className="bg-gray-200 p-2 rounded">
            <p className="text-gray-500">Jul</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-200 p-2 rounded">
            <p className="text-gray-500">Jul</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-200 p-2 rounded">
            <p className="text-gray-500">Jul</p>
            <p className="text-2xl font-bold">0</p>
          </div>
          <div className="bg-gray-200 p-2 rounded">
            <p className="text-gray-500">Jul</p>
            <p className="text-2xl font-bold">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
