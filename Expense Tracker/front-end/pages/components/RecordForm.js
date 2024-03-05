export function RecordForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="amount">Expense</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="category">Amount</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
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
        <input
          type="time"
          id="note"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="note">Payee</label>
        <input
          type="text"
          id="note"
          value={payee}
          onChange={(e) => setPayee(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="note">Note</label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <button type="submit">Add Record</button>
    </form>
  );
}
