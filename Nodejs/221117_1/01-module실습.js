//https://nodejs.org/dist/latest-v14.x/docs/api/os.html#os_os_tmpdir

const os = require('os');
console.log('os.freemem : ', os.freemem());//사용 가능한 메모리(RAM)출력하기
console.log('os.tatalmem : ', os.totalmem());//전체 메모리 용량 출력하기
console.log('os.homedir : ', os.homedir());//홈 디렉토리 경로 출력하기

console.log('=================================================')

const path = require('path');
const file = __filename;
console.log('path.sep : ', path.sep);//경로 구분자 출력하기
console.log("path.extname : ", path.extname(file));//현재 파일의 확장자 출력하기
console.log('path.parse : ',path.parse(file));//현재 파일의 경로를 분리해서 출력하기