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
