import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import Navbar from "./components/UI/Navbar";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "화장지",
    amount: 3500,
    date: new Date(2020, 7, 14),
    type: "지출",
  },
  {
    id: "e2",
    title: "회식",
    amount: 35000,
    date: new Date(2021, 2, 12),
    type: "지출",
  },
  {
    id: "e3",
    title: "후드",
    amount: 100000,
    date: new Date(2021, 2, 28),
    type: "지출",
  },
  {
    id: "e4",
    title: "무선 마우스",
    amount: 35000,
    date: new Date(2021, 5, 12),
    type: "지출",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Navbar />

      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
