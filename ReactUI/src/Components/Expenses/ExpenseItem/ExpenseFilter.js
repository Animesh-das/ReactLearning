import React, { useState } from "react";
import Card from "../../Common/Card";
import "./ExpenseFilter.css";

function ExpenseFilter(prop) {
  const [filterYear, setFilterYear] = useState(0);

  const onChangeHandler = (event) => {
    setFilterYear(event.target.value);
    prop.onFilterChange(parseInt(event.target.value));
  };

  return (
    <Card className="expenseFilter__Container">
      <span className="expensefilter__span">Filter By Year</span>
      <select
        value={filterYear}
        className="expensefilter__Year"
        onChange={onChangeHandler}
      >
        <option value="0">All</option>
        <option value="2018">2018</option>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
      </select>
    </Card>
  );
}

export default ExpenseFilter;
