// @ts-check

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

console.log({ ...obj });

const copyObj2 = { ...obj, lupy: 'lupy' };
console.log(copyObj2);
