import { useState } from "react";

export function Toggle() {
  const [isExpense, setIsExpense] = useState(true);
  return (
    <div class="flex items-center mb-4">
      <label for="expense-toggle" className="block text-gray-700 font-bold p-5">
        Expense
      </label>
      <div class="relative">
        <input
          id="expense-toggle"
          type="checkbox"
          class="sr-only"
          checked={isExpense}
          onChange={() => setIsExpense(!isExpense)}
        ></input>
        <div class="block bg-gray-200 w-24 h-8 rounded-full"></div>
        <div
          id="expense-dot"
          class={`dot absolute left-1 top-1 w-12 h-6 rounded-full transition duration-200 ease-in-out ${
            isExpense ? "bg-red-500" : "bg-green-500"
          }`}
          style={{ left: isExpense ? "1px" : "13px" }}
        ></div>
      </div>
      <label for="income-toggle" className="block text-gray-700 font-bold p-5">
        Income
      </label>
      <input id="income-toggle" type="checkbox" class="sr-only"></input>
    </div>
  );
}
