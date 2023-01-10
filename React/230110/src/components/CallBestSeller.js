import React from 'react';
import BestSeller from './BestSeller';

export default function CallBestSeller() {
  const book = {
    writer: '김유진',
    price: '13,500원',
    type: '자기계발서',
  };
  return (
    <div>
      <BestSeller obj={book} />
    </div>
  );
}
