// //모듈 코드
// const a = 'a변수';
// const b = 'b변수';

// function test(){
//     console.log('test');
// }

// //모듈로서 a b변수, 함수 test를 내보내겠다
// module.exports = {
//     a,
//     b,
//     test
// }




//===============================================================================





const a =1;
const b =3;


module.exports = {
    a,
    b
}

//위 코드는 
// module.exports = array; 와 같은 코드이다. 따라서 module2의 const num = require에서 
//num에는 배열값이 들어가 num.a, num.b로 불러야한다.