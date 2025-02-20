import React, { useState } from "react";
import "./budgetlist.css";
import Income from "./IncomeExpense/income";
import Expense from "./IncomeExpense/expense";

function Budgetlist({ addTransaction }) {
  const [selectedTab, setSelectedTab] = useState("tab-1");
  const [display, setDisplay] = useState("");
  const [selectedIncome, setSelectedIncome] = useState("Salary");
  const [selectedExpense, setSelectedExpense] = useState("Home");

  const handleTabChange = (tab) => setSelectedTab(tab);
  const handleClear = () => setDisplay("");

  const handleNumberClick = (num) => {
    if (display.length >= 6) {
      setDisplay(`error!${num}`);
      return;
    }
    setDisplay(display + num);
  };

  const handleAddClick = () => {
    const valueToAdd = parseFloat(display) || 0;
    if (valueToAdd === 0) return;

    const transactionType = selectedTab === "tab-1" ? "Income" : "Expense";
    const transactionCategory =
      transactionType === "Income" ? selectedIncome : selectedExpense;

    console.log(
      "Adding Transaction:",
      valueToAdd,
      transactionType,
      transactionCategory
    );

    addTransaction(valueToAdd, transactionType, transactionCategory);
    setDisplay("");
  };

  return (
    <>
      <div className="type">
        <div className="type-tab">
          <input
            type="radio"
            name="radio"
            id="tab-1"
            checked={selectedTab === "tab-1"}
            onChange={() => handleTabChange("tab-1")}
          />
          <label htmlFor="tab-1">Income</label>

          <input
            type="radio"
            name="radio"
            id="tab-2"
            checked={selectedTab === "tab-2"}
            onChange={() => handleTabChange("tab-2")}
          />
          <label htmlFor="tab-2">Expense</label>

          <div className="type-color"></div>
        </div>

        {selectedTab === "tab-1" && (
          <Income
            selectedIncome={selectedIncome}
            setSelectedIncome={setSelectedIncome}
          />
        )}
        {selectedTab === "tab-2" && (
          <Expense
            selectedExpense={selectedExpense}
            setSelectedExpense={setSelectedExpense}
          />
        )}

        <div className="type-amount">
          <p style={{ color: display ? "#5b657a" : "#bec8e4" }} className="m-0">
            ${display || "0.00"}
          </p>

          <button className="type-add">
            <span
              className="material-symbols-outlined"
              onClick={handleAddClick}
            >
              add_circle
            </span>
          </button>
        </div>
      </div>
      <div className="calculator w-100">
          <div className="cal-num" onClick={() => handleNumberClick("1")}>
            1
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("2")}>
            2
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("3")}>
            3
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("4")}>
            4
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("5")}>
            5
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("6")}>
            6
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("7")}>
            7
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("8")}>
            8
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("9")}>
            9
          </div>
          <div className="cal-num" onClick={() => handleNumberClick(".")}>
            .
          </div>
          <div className="cal-num" onClick={() => handleNumberClick("0")}>
            0
          </div>
          <div data-action="clear" className="cal-cancel" onClick={handleClear}>
            <span className="material-symbols-outlined">backspace</span>
          </div>
        </div>
    </>
  );
}

export default Budgetlist;
