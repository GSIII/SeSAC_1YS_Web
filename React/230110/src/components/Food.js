import React from 'react';

export default function Food(props) {
  return (
    <div>
      지금 가장 먹고싶은건 <span style={{ color: 'red' }}>{props.food}</span>
    </div>
  );
}

Food.defaultProps = {
  food: '음식',
};
