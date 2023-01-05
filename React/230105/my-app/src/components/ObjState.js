import React, { useState } from 'react';

export default function ObjState() {
  const [state, setState] = useState({ teacher: '이효석' });
  console.log(state);

  return (
    <div>
      <button
        onClick={() => {
          state.teacher = 'tetz';
          const copyObj = { ...state }; //state가 가지고 있던 값들만 copy해서 새로운 객체에 담는다.
          setState(copyObj);
          console.log(state);
        }}
      >
        영어로!
      </button>
      <br />
      <span>{state.teacher}</span>
    </div>
  );
}
