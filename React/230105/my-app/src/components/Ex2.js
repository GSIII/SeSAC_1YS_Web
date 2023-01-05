import React, { useState } from 'react';

export default function Ex2() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        {count <= 10 ? '👍' : '😎'}
      </button>
      <br />
      <span>{count}</span>
    </div>
  );
}
