//절대경로 필요한 순간 사용하자.
console.log("__filename : " + __filename);
console.log("__dirname : "+ __dirname);

//process객체 = 현재 실행중인 노드 프로세스 정보가 담겨있는 ㄴ객체이다.
console.log('process.version :' , process.version);
console.log('process.arch : ', process.arch);
console.log('process.platform : ', process.platform);
console.log('process.cpuUsage :', process.cpuUsage());
console.log('====================================================');

//os모듈 -> 가져와서 사용해야한다,.
const os=require('os');
console.log("os.type : ", os.type());
console.log('os.cpus : ', os.cpus());//컴퓨터 코어 정보를 보여준다
console.log('os.homedir : ', os.homedir());//
console.log("os.freemem : ", os.freemem());//현재 사용 가능한 메모리 정보
console.log('===========================================================');

//path모듈 = 파일/보내는 것에 대한 경로
const path = require('path');
const file = __filename;
console.log("path.extname : ", path.extname(file));//파일의 확장자를 가져온다.
console.log('path.parse : ', path.parse(file));//파일의 여러 정보를 구분지어서 가져온다.
