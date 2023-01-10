import React, { useState } from 'react';

export default function HandlerEx1() {
  const [text, setText] = useState('Hello World!');
  return (
    <div>
      {text}
      <br />
      <button onClick={() => setText('Goodbye World!')}>클릭</button>
    </div>
  );
}
