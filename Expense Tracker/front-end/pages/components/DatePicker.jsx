import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export function Date (){
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="text-lg mb-10 border rounded ">
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
    </div>
  );
};