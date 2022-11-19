const fs2 = require('fs').promises;
//promise이용해서 새 파일 만들기
fs2.writeFile('./sesac.txt', '반갑습니다.')
    .then(function(){
        return fs2.readFile('./sesac.txt');
    }).then(function(data){
        console.log(data.toString());
    });
fs2.copyFile('./sesac.txt','./sesac2.txt')
    .then(function(){
        console.log('복사완료');
    }).catch((error)=>{
        console.error(error);
    });
fs2.rename('./sesac2.txt','./new.txt')
    .then(function(){
        console.log('change success');
    }).catch((error)=>{
        console.error(error);
    });