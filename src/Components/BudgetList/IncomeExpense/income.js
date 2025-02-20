import React from "react";
import "./income.css";

function Income({ selectedIncome, setSelectedIncome }) {
  const handleRadioChange = (event) => {
    setSelectedIncome(event.target.value);
  };

  return (
    <div className="type-category">
      <div className="type-category-inc">
        <input
          type="radio"
          name="radio-3"
          id="tab-3"
          value="Salary"
          checked={selectedIncome === "Salary"}
          onChange={handleRadioChange}
        />
        <label htmlFor="tab-3" className="icon-1">
          <span className="material-symbols-outlined">attach_money</span>
          <p>Salary</p>
        </label>

        <input
          type="radio"
          name="radio-4"
          id="tab-4"
          value="Gift"
          checked={selectedIncome === "Gift"}
          onChange={handleRadioChange}
        />
        <label htmlFor="tab-4" className="icon-2">
          <span className="material-symbols-outlined">cake</span>
          <p>Gift</p>
        </label>

        <input
          type="radio"
          name="radio-5"
          id="tab-5"
          value="Refund"
          checked={selectedIncome === "Refund"}
          onChange={handleRadioChange}
        />
        <label htmlFor="tab-5" className="icon-3">
          <span className="material-symbols-outlined">replay</span>
          <p>Refund</p>
        </label>
      </div>
    </div>
  );
}

export default Income;
