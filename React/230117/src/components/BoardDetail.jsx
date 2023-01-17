import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

export default function BoardDetail() {
  const { boardID } = useParams();
  //   console.log(params);
  return (
    <>
      <Header />
      <h2>{boardID}번 게시글입니다.</h2>
    </>
  );
}
