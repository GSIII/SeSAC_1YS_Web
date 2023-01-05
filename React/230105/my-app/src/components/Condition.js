import React, { useState } from 'react';

export default function Condition() {
  const [condition, setCondition] = useState(true); //let으로 설정하면 상태변경함수를 쓰지 않아도 변경되는 일이 있기 때문에 const를 사용하자

  return (
    <div>
      <button onClick={() => setCondition(!condition)}>컨디션 변경!</button>
      <br />
      <span>{condition ? '👍' : '😂'}</span>
    </div>
  );
}
