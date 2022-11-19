const add = require('./01-module2.js');

console.log(add);
console.log(add());
//{add : Function} 이 형태로 넘어왔을 때는 console.log(add.add());를 써야 한다.
//지금은 module2에서 add가 중괄호에 감싸서 넘어온게 아니므로 console.log(add)하면 함수 값이 나오고
//console.log(add())하면 add함수가 실행된다.