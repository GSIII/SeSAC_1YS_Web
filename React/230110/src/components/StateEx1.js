import React, { useState } from 'react';

export default function StateEx1() {
  const [num, setNum] = useState(0);
  return (
    <div>
      {num}
      <br />
      <button onClick={() => setNum(num + 2)}>+2</button>
      <button onClick={() => setNum(num - 1)}>-1</button>
    </div>
  );
}
