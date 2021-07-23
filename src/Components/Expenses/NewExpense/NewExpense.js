import { useState } from "react";
import Card from "../../Common/Card";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (prop) => {
  const OnAddExpenseClickHandler = () => {
    setIsAddExpenseVisible((prevValue) => {
      return !isAddExpenseVisible;
    });
  };

  const [isAddExpenseVisible, setIsAddExpenseVisible] = useState(false);

  return (
    <Card className="newExpense__container">
      {!isAddExpenseVisible && (
        <button
          className="newExpense__AddExpense"
          onClick={OnAddExpenseClickHandler}
        >
          Add Expenses
        </button>
      )}
      {isAddExpenseVisible && (
        <NewExpenseForm
          onFormSubmit={prop.onAddExpense}
          onFormCancel={OnAddExpenseClickHandler}
        />
      )}
    </Card>
  );
};

export default NewExpense;
