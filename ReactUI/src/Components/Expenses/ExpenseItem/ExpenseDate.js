function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item__date">
      <div>{month}</div>
      <div>
        <b>{day}</b>
      </div>
      <div>{year}</div>
    </div>
  );
}

export default ExpenseDate;
