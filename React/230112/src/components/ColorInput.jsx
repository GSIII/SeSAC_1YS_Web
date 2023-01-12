import React from 'react';
import { useRef } from 'react';

export default function ColorInput() {
  const userInput = useRef();
  const divEl = useRef();

  const ChangeColor = () => {
    divEl.current.style.backgroundColor = userInput.current.value;
  };
  return (
    <div ref={divEl}>
      <input ref={userInput} />
      <br />
      <button onClick={ChangeColor}>색 적용</button>
    </div>
  );
}
