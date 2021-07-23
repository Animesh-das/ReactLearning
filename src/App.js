import { useState } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";

function App() {
  const expenseList = [
    { id: 1, title: "car insurance", date: new Date(2020, 11, 12), amount: 24 },
    { id: 2, title: "car service", date: new Date(2019, 3, 6), amount: 29 },
    { id: 3, title: "car wash", date: new Date(2021, 3, 5), amount: 124 },
  ];
  const [expenses, setExpenses] = useState(expenseList);

  const onAddExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
}

export default App;
