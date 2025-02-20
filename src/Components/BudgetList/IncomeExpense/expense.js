import React from "react";
import "./income.css";

function Expense({selectedExpense, setSelectedExpense}) {

  const handleRadioChange = (event) => {
    setSelectedExpense(event.target.value);
  };

  return (
    <div className="type-category">
      <div className="type-category-inc">
        <input
          type="radio"
          name="radio-6"
          id="tab-6"
          value="Home"
          checked={selectedExpense === "Home"}
          onChange={handleRadioChange}
        />
        <label htmlFor="tab-6" className="icon-1">
          <span className="material-symbols-outlined">home</span>
          <p>Rent</p>
        </label>
        
        <input
          type="radio"
          name="radio-7"
          id="tab-7"
          value="Shopping"
          checked={selectedExpense === "Shopping"}
          onChange={handleRadioChange}
        />
        <label htmlFor="tab-7" className="icon-2">
          <span className="material-symbols-outlined">shopping_basket</span>
          <p>Shopping</p>
        </label>
        
        <input
          type="radio"
          name="radio-8"
          id="tab-8"
          value="Other"
          checked={selectedExpense === "Other"}
          onChange={handleRadioChange}
        />
        <label htmlFor="tab-8" className="icon-4">
          <span className="material-symbols-outlined">commute</span>
          <p>Transport</p>
        </label>
      </div>

      {/* <p>Selected Expense: {selectedExpense}</p> */}
    </div>
  );
}

export default Expense;
