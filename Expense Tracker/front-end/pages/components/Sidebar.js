import React from "react";

const Sidebar = ({ onAddRecord }) => {
  return (
    <div className="sidebar">
      <button onClick={onAddRecord}>+ Add</button>
    </div>
  );
};

export default Sidebar;
