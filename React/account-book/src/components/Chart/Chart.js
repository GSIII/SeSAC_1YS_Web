import React from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  console.log(props.dataPoints);
  const dataPointValues = props.dataPoints.map((dataPoint) =>
    Number(dataPoint.value)
  );
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={100000}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
