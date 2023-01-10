import React from 'react';

export default function Test() {
  const name = '갈서인';
  const my_style = {
    backgroundColor: 'blue',
    color: 'orange',
    fontSize: '40px',
    padding: '12',
  };
  return <div style={my_style}>{name}</div>;
}
