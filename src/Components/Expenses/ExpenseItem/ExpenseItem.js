import ExpenseDate from "./ExpenseDate";
import Card from "../../Common/Card";

import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-container">
      <ExpenseDate date={props.date} />
      <div className="expense-item-description">
        <span>
          <b>{props.title}</b>
        </span>
        <Card className="expense-item__price">INR {props.amount}</Card>
      </div>
    </Card>
  );
}

export default ExpenseItem;
