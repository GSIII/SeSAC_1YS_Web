import React from 'react';

export default function BestSeller(props) {
  const img_style = { width: '200px', height: '400px' };
  const { writer, price, type } = props.obj;
  return (
    <div>
      <h1>이번주 베스트 셀러</h1>
      <img style={img_style} src="/bestseller.jpg" alt="이미지" />
      <h2>나의 하루는 4시 40분에 시작된다</h2>
      <p>저자 : {writer}</p>
      <p>판매가 : {price}</p>
      <p>구분 : {type}</p>
    </div>
  );
}
