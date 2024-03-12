export default function Currency() {
  return (
    <div className="w-full max-w-md mx-auto text-center">
      <h1 class="text-2xl font-bold mb-4">Geld</h1>
      <div class="flex mb-4 justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          1
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          2
        </button>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          3
        </button>
      </div>
      <div class="mb-4">
        <label for="currency" class="block text-gray-700 font-bold mb-2">
          Select base currency
        </label>
        <select
          id="currency"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="mnt">MNT - Mongolian Tugrik</option>
          <option value="mnt">DXY - US Dollar</option>
          <option value="mnt">EUR - European Pound</option>
          <option value="mnt">JPY - Japanese Yen</option>
        </select>
      </div>

      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Confirm
      </button>
    </div>
  );
}
