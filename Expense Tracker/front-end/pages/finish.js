export default function Finish() {
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
          Good Job!
          </label>
          <p
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >Your very first account has been created. Now continue to dashboard and start tracking
          </p>
        </div>
  
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Dashboard
        </button>
      </div>
    );
  }
  