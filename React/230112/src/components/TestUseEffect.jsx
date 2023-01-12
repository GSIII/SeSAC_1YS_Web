import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('입력하세요');
  const inputValue = useRef();

  const onButtonClick = () => {
    console.log('버튼 클릭');
    setCount(count + 1);
  };

  const onInputChange = () => {
    console.log('키 입력');
    setText(inputValue.current.value);
  };

  useEffect(() => {
    console.log('렌더링 할 때마다 실행되는 useEffect');
  });

  useEffect(() => {
    console.log('mount될 때만 실행');
  }, []); //빈배열일 경우 마운트 될때만 실행된다

  useEffect(() => {
    console.log('버튼,키 클릭 시에만 실행');
  }, [count, text]); //버튼,키 입력시 변하는 값을 한꺼번에 넣기

  //   useEffect(() => {
  //     console.log('키 입력 시에만 실행');
  //   }, [text]); //키 입력시 변하는 것은 text이므로 배열에 text를 준다.

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>+1버튼</button>
      <br />
      <h1>{text}</h1>
      <input ref={inputValue} onChange={onInputChange} />
    </div>
  );
}
