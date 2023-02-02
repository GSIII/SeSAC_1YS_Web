import React, { useState } from "react";

// import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredType, setEnteredType] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const typeChangeHandler = (event) => {
    setEnteredType(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      type: enteredType,
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>항목</label>
          <input
            type="text"
            value={enteredTitle}
            placeholder="항목 입력"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>금액</label>
          <input
            type="text"
            min="0"
            id="amount"
            value={enteredAmount}
            placeholder="금액 입력"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <label>
            수입
            <input
              type="checkbox"
              id="수입"
              value="수입"
              onChange={typeChangeHandler}
              checked={enteredType === "수입" || ""}
            />
          </label>
        </div>
        <div>
          <label>
            지출
            <input
              type="checkbox"
              id="지출"
              value="지출"
              onChange={typeChangeHandler}
              checked={enteredType === "지출" || ""}
            />
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          닫기
        </button>
        <button type="submit">입력</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
