import React, { useState } from 'react';

export default function StateEx2() {
  const [num, setNum] = useState(0);

  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 2);
  }
  return (
    <div>
      {num}
      <br />
      <button onClick={() => increase()}>+1</button>
      <button onClick={() => decrease()}>-2</button>
    </div>
  );
}
