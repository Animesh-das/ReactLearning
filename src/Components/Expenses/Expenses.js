import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import Card from "../Common/Card";
import ExpenseFilter from "./ExpenseItem/ExpenseFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenseData;
  const [filterYear, setfilterYear] = useState(0);

  const onFilterChangeHandler = (filterYear) => {
    setfilterYear(filterYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => filterYear === 0 || expense.date.getFullYear() === filterYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterChange={onFilterChangeHandler} />
      {filteredExpenses.length === 0 && (
        <Card className="expenses">
          <span className="span__noExpenses">No Expense data available.</span>
        </Card>
      )}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
    </Card>
  );
};
export default Expenses;
