import React from 'react';
import catImg from '../cat.jpg';

export default function Image() {
  return (
    <>
      <img src="/images/cat.jpg" alt="고양이" />;
      <img src={catImg} alt="고양이" />
    </>
  );
}
