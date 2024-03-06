export default function RecordsTable() {
  return (
    <form>
      <div>
        <h2>Add Record</h2>
        <button>close</button>
      </div>

      <fieldset>
        <legend>Type</legend>
        <label>
          <input type="radio" value="expense" />
          Expense
        </label>
        <label>
          <input type="radio" value="income" />
          Income
        </label>
      </fieldset>
      <label>
        Amount
        <input type="number" step="0.01" />
      </label>
      <label>
        Category
        <select>
          <option disabled selected>
            Choose Category
          </option>
          <option>Food & Drinks</option>
          <option>Shopping</option>
          <option>Housing</option>
          <option>Transportation</option>
          <option>Vehicle</option>
          <option>Life & Entertainment</option>
          <option>Communication, PC</option>
          <option>Financial Expenses</option>
          <option>Investments</option>
          <option>Income</option>
          <option>Others</option>
          <option>+ Add Categories</option>
        </select>
      </label>
      <label>
        Choose a date and time:
        <input type="datetime-local" />
      </label>
      <label>
        Payee
        <input type="text" />
      </label>
      <label>
        Note
        <input type="text" />
      </label>
      <button type="submit">Add Record</button>
    </form>
  );
}
