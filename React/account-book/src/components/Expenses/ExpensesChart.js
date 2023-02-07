import React from "react";

import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
  console.log(props.expenses);
  const chartDataPoints = [
    { label: "1월 ", value: 0 },
    { label: "2월 ", value: 0 },
    { label: "3월 ", value: 0 },
    { label: "4월 ", value: 0 },
    { label: "5월 ", value: 0 },
    { label: "6월 ", value: 0 },
    { label: "7월 ", value: 0 },
    { label: "8월 ", value: 0 },
    { label: "9월 ", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ];

  console.log(props.expenses);
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth();
    console.log(expenseMonth, "월");
    props.expenses.forEach((item) => {
      console.log(item.type);
      if (item.type === "수입") {
        chartDataPoints[expenseMonth].value += +expense.amount;
      } else if (item.type === "지출") {
        chartDataPoints[expenseMonth].value -= expense.amount;
      }
      console.log(chartDataPoints);
    });
    // chartDataPoints[expenseMonth].value += expense.amount;
  }

  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;
