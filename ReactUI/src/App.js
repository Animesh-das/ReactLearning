import { useState, useEffect, useCallback } from "react";
import "./App.css";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  const onAddExpenseHandler = (expenseData) => {
    setExpenses((prevExpenses) => [expenseData, ...prevExpenses]);
  };

  const LoadExpenses = useCallback(async () => {
    const response = await fetch("https://localhost:44320/api/Expenses");
    const expenseData = await response.json();
    const expenses = expenseData.map((expense) => {
      return {
        id: expense.id,
        title: expense.name,
        date: new Date(expense.date),
        amount: expense.amount,
      };
    });

    setExpenses(expenses);
  }, []);

  useEffect(() => {
    LoadExpenses();
  }, [LoadExpenses]);

  return (
    <div className="App">
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses expenseData={expenses} />
    </div>
  );
}

export default App;
