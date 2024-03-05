export default function Home() {
  return (
    <form>
      <div>
        <label htmlFor="amount">Expense</label>
        <input type="number" id="amount" />
      </div>
      <div>
        <label htmlFor="category">Amount</label>
        <input type="text" id="category" />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" />
      </div>
      <div>
        <label htmlFor="payee">Choose</label>
        <select id="payee">
          <option value="income">Income</option>
          {/* Add other options here */}
        </select>
      </div>
      <div>
        <label htmlFor="note">4:15 PM</label>
        <input type="time" id="note" />
      </div>
      <div>
        <label htmlFor="note">Payee</label>
        <input type="text" id="note" />
      </div>
      <div>
        <label htmlFor="note">Note</label>
        <textarea id="note" />
      </div>
      <button type="submit">Add Record</button>
    </form>
  );
}
