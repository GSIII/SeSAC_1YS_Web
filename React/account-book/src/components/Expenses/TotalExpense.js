import React, { useState, useEffect } from 'react';

export default function TotalExpense(props) {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);

  console.log(props.items);
  console.log(props.year);
  props.type.forEach((element) => {
    console.log(element.type);
  });

  useEffect(() => {
    let total = { balance: 0, income: 0, outcome: 0 };
    if (
      props.items.forEach((item) => {
        if (item.type === '지출') {
          total.outcome += Number(item.amount);
          total.balance -= Number(item.amount);
        } else {
          total.income += Number(item.amount);
          total.balance += Number(item.amount);
        }
      })
    );
    setTotalOutcome(total.outcome);
    setTotalIncome(total.income);
    setTotalBalance(total.balance);
  }, [props.items]);

  return (
    <>
      <h1>나의 자산 현황</h1>
      <h2>
        총 수입 : {totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원
      </h2>
      <h2>
        총 지출 :{' '}
        {totalOutcome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </h2>
      <h2>
        총 자산 :{' '}
        {totalBalance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
      </h2>
    </>
  );
}
