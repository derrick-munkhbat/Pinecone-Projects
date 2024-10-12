import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function Date() {
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="flex gap-3">
      <div>
        <label htmlhtmlFor="date">date</label>
        <div className="flex text-lg mb-10 border-black border rounded">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>

      <div>
        <label htmlhtmlFor="date">time</label>
        <div className="text-lg mb-10 border-black border rounded flex">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            timeCaption="Time"
            datehtmlFormat="h:mm aa"
          />
        </div>
      </div>
    </div>
  );
}
