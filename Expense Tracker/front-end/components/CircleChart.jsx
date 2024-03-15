export function CircleChart() {


  
  return (
    <div class="bg-gray-100 p-8">
  <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
  <div class="bg-white p-4 rounded">
    <div class="flex justify-between mb-2">
      <p class="text-gray-500">Income - Expense</p>
      <p class="text-green-500">3'000'000</p>
    </div>
    <div class="grid grid-cols-5 gap-2 mb-2">
      <div class="bg-gray-200 p-2 rounded">
        <p class="text-gray-500">Jun 1 - Nov 30</p>
        <p class="text-2xl font-bold">3'000'000</p>
      </div>
      <div class="bg-gray-200 p-2 rounded">
        <p class="text-gray-500">Bills</p>
        <p class="text-2xl font-bold">5'000'000</p>
        <p class="text-gray-500">15.50%</p>
      </div>
      <div class="bg-gray-200 p-2 rounded">
        <p class="text-gray-500">⚫ Food</p>
        <p class="text-2xl font-bold">5'000'000</p>
        <p class="text-gray-500">15.50%</p>
      </div>
      <div class="bg-gray-200 p-2 rounded">
        <p class="text-gray-500">● Shopping</p>
        <p class="text-2xl font-bold">5'000'000</p>
        <p class="text-gray-500">15.50%</p>
      </div>
      <div class="bg-gray-200 p-2 rounded">
        <p class="text-gray-500">Insurance</p>
        <p class="text-2xl font-bold">5'000'000</p>
        <p class="text-gray-500">15.50%</p>
      </div>
      <div class="bg-gray-200 p-2 rounded">
        <p class="text-gray-500">Clothing</p>
        <p class="text-2xl font-bold">5'000'000</p>
        <p class="text-gray-500">15.50%</p>
      </div>
    </div>
  </div>
</div>
  );
}
