import FormInput from "./FormInput";

const NewExpenseForm = (prop) => {
  const [newTitleValue, SetNewTitleValue] = useState("");
  const [newAmountValue, SetNewAmountValue] = useState("");
  const [newDateValue, SetNewDateValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const onTitleChangeHandler = (event) => {
    SetNewTitleValue(event.target.value);
  };

  const onAmountChangeHandler = (event) => {
    SetNewAmountValue(event.target.value);
  };

  const onDateChangeHandler = (event) => {
    SetNewDateValue(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!newTitleValue || !newAmountValue || !newDateValue) {
      setIsValid(false);
      return;
    }

    const expenseItem = {
      id: Math.random,
      title: newTitleValue,
      amount: newAmountValue,
      date: new Date(newDateValue),
    };

    prop.onFormSubmit(expenseItem);

    SetNewDateValue("");
    SetNewTitleValue("");
    SetNewAmountValue("");
    prop.onFormCancel();
  };

  const onCancelClickHandler = (event) => {
    event.preventDefault();
    prop.onFormCancel();
    SetNewDateValue("");
    SetNewTitleValue("");
    SetNewAmountValue("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="newExpense_form__controlContainer">
        <FormInput inValid={!isValid}>
          <span>Title</span>
          <input
            type="text"
            value={newTitleValue}
            onChange={onTitleChangeHandler}
          />
        </FormInput>
        <FormInput inValid={!isValid}>
          <span>Amount</span>
          <input
            type="number"
            value={newAmountValue}
            onChange={onAmountChangeHandler}
          />
        </FormInput>
        <FormInput inValid={!isValid}>
          <span>Date</span>
          <input
            type="Date"
            value={newDateValue}
            onChange={onDateChangeHandler}
          />
        </FormInput>
      </div>
      <button type="button" onClick={onCancelClickHandler}>
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );
};

export default NewExpenseForm;
