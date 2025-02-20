import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budgetlist from "./Components/BudgetList/budgetlist";
import Balance from "./Components/BalancePage/balance";
import { useState, useEffect } from "react";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (amount, type, category) => {
    const newTransaction = { amount, type, category, id: Date.now() };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((transaction) => transaction.id !== id));
  };

  useEffect(() => {
    console.log("Updated Transactions:", transactions);
  }, [transactions]);
  
  return (
    <div className="app">
      <div className="page">
        <Balance transactions={transactions} deleteTransaction={deleteTransaction}/>
      </div>
      <div className="page">
        <Budgetlist addTransaction={addTransaction}/>
      </div>
    </div>
  );
}

export default App;
