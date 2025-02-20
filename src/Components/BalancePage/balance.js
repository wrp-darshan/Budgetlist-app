import React from "react";
import "./balance.css";

function Balance({ transactions, deleteTransaction }) {
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((acc, t) => acc + t.amount, 0);
  const totalBalance = totalIncome - totalExpense;

  return (
    <>
      <div className="balance">
        <div className="balance-total">
          <h1>Balance</h1>
          <p className="m-0"><p className="m-0 d-inline" style={{'padding-right': '5px'}}>$</p>{totalBalance.toFixed().split('.').join('')}</p>
        </div>
        <div className="balance-type balance-income">
          <div className="balance-group">
            <h2>Income</h2>
            <p className="m-0"><p className="m-0 d-inline" style={{'padding-right': '5px'}}>$</p>{totalIncome.toFixed().split('.').join('')}</p>
          </div>
          <span className="material-symbols-outlined">transit_enterexit</span>
        </div>
        <div className="balance-type balance-expense">
          <div className="balance-group">
            <h2>Expense</h2>
            <p className="m-0"><p className="m-0 d-inline" style={{'padding-right': '5px'}}>$</p>{totalExpense.toFixed().split('.').join('')}</p>
          </div>
          <span className="material-symbols-outlined">transit_enterexit</span>
        </div>
      </div>

      <div className="balance-details">
        <h3>Recent Transactions</h3>
          {transactions.length > 0 ? (
            transactions.map((t) => (
              <div key={t.id} className={`transaction ${t.type.toLowerCase()}`}>
                <div className="overflow-hidden">
                <p className="mb-0 d-flex justify-content-between align-items-center py-2">
                  <span className="transaction-icon">
                    {/* Icon selection based on category */}
                    {t.category === "Salary" && (
                      <div
                        className="icon-1 d-flex align-items-center">
                        <span className="material-symbols-outlined m-0">
                          attach_money
                        </span>
                        <p>Salary</p>
                      </div>
                    )}
                    {t.category === "Gift" && (
                      <div
                        className="icon-2 d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <span className="material-symbols-outlined m-0">
                          cake
                        </span>
                        <p className="m-0">Gift</p>
                      </div>
                    )}
                    {t.category === "Refund" && (
                      <div
                        className="icon-3 d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <span className="material-symbols-outlined m-0">
                          replay
                        </span>
                        <p className="m-0">Refund</p>
                      </div>
                    )}
                    {t.category === "Home" && (
                      <div
                        className="icon-1 d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <span className="material-symbols-outlined m-0">
                          home
                        </span>
                        <p className="m-0">Rent</p>
                      </div>
                    )}
                    {t.category === "Shopping" && (
                      <div
                        className="icon-2 d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <span className="material-symbols-outlined m-0">
                          shopping_basket
                        </span>
                        <p className="m-0">Shopping</p>
                      </div>
                    )}
                    {t.category === "Other" && (
                      <div
                        className="icon-4 d-flex align-items-center"
                        style={{ gap: "10px" }}
                      >
                        <span className="material-symbols-outlined mb-0">
                          commute
                        </span>
                        <p className="m-0">Transport</p>
                      </div>
                    )}
                  </span>
                  <div
                    className={`d-flex align-items-center ${t.type === "Income" ? "increment" : "decrement"}`}
                  >
                    {t.type === "Income" ? " + " : " - "} {t.amount.toFixed()}
                    <button
                      className="transaction-bin"
                      onClick={() => deleteTransaction(t.id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </p>
                </div>
              </div>
            ))
          ) : (
            <div className="balance-empty">
              <span className="material-symbols-outlined">loyalty</span>
              <p>Start adding a new transaction</p>
            </div>
          )}
      </div>
    </>
  );
}

export default Balance;
