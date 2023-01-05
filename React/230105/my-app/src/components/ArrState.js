import React, { useState } from 'react';

export default function ArrState() {
  const [state, setState] = useState([0]); //첫번째 인덱스에 0을 넣어준다. //특정 메모리 주소를 가지고 있다.
  console.log(state);

  return (
    <div>
      {state[0]}
      <br />
      <button
        onClick={() => {
          state[0] = 1;
          const copyArr = [...state]; //메모리 주소가 아니라 배열의 값만 가져와서 새로운 배열을 만든다.
          //const copyArr = state; //이렇게 하면 랜더링이 안될 것이다. 왜냐하면 메모리 주소까지 가져오는 것이기 때문이다.
          setState([1]); //메모리 주소를 새롭게 지정해준다.
          console.log(copyArr);
        }}
      >
        +1
      </button>
    </div>
  );
}
