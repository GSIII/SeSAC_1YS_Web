import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import ProfileComponent from './ProfileComponent';

export default function UseEffectFetch() {
  const [dataArr, setDataArr] = useState([]); //초기값을 빈 배열로 주지 않으면 map함수를 쓸 수 없기 때문에 빈 배열로 줘야한다.

  async function fetchData() {
    const resFetch = await axios.get('http://localhost:4000');

    if (resFetch.status !== 200) return alert('통신 에러'); //if문에 예외 처리 해주는게 가독성이 더 좋다

    const data = resFetch.data;
    setDataArr(data);
    console.log(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {dataArr.map((el, index) => {
        return (
          <ProfileComponent
            key={index}
            name={el.name}
            age={el.age}
            nickName={el.nickName}
          />
        );
      })}
    </div>
  );
}
