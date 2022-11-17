// //실행하는 프로그램
// const result = require('./221117_module.js');

// console.log(result.a);
// console.log(result.b);
// // 함수정의만 가져온다.
// console.log(result.test);
// result.test();







//==============================================================






const num = require('./01-module.js');

// const{a,b}=require('./221117_module.js') 구조분해 이용할 경우 이렇게 쓴다.


const a = num.a;
const b = num.b;

function add(){
    return a+b;
}

//중괄호 안감싸고 보내면 터미널에 값만 나온다.
module.exports=add;


//중괄호 넣어서 보내면 터미널에 키:값 이 나오고
// module.exports={add};
//result = {add : function(){return a+b}}
//중괄호 쳐서 보내는 것은 add라는 키에 함수 값을 넣는것을 말한다.