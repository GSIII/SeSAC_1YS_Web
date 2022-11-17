// function func1(value, call){
//     console.log(value);
//     call();
// }
// //func1이 call을 파라미터로 받고 함수로 실행하고 있다.
// func1('a',function(){
//     console.log('1');
// });

// function func2(){
//     console.log('2');
// }
// func1(func2);

console.log('start');
function login(id, cb) {
    setTimeout(()=>{ //setTimeout은 비동기 함수
        console.log('로그인 성공');
        cb(id);//콜백함수를 만들어서 로그인 성공이 끝난 후 콜백함수 실행하도록 한다.
    }, 2000);
}

login('kim', function(id){
    console.log(id+'님 환영합니다.');
});
console.log('finish');
