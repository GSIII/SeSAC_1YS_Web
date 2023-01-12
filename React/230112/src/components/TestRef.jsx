import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export default function TestRef() {
  const [text, setText] = useState('안녕하세요');

  const inputValue = useRef();

  function onChangeText() {
    console.log(inputValue);
    setText(inputValue.current.value); //inputValue.current => 해당 dom요소까지 간다.입력받은 값을 받아올 수 있다.
  }

  return (
    <div>
      <h1>{text}</h1>
      <input
        ref={inputValue} //참조하고싶은 dom요소에 ref를 속성값으로 준다
        onChange={() => {
          onChangeText();
        }}
      />
    </div>
  );
}
