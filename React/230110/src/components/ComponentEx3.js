import React from 'react';

export default function ComponentEx3({ text, valid }) {
  function valid() {
    console.log('콘솔 띄우기 성공!');
  }
  return (
    <div>
      {text}
      <br />
      <button onClick={valid}>콘솔 메세지</button>
    </div>
  );
}

ComponentEx3.defaultProps = {
  text: '기본 text props 입니다.',
};
