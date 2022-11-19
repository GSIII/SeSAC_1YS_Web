// const fs2 = require('fs').promises;
// fs2.writeFile('./sesac.txt', '반갑습니다.')
//     .then(function(){
//         return fs2.readFile('./sesac.txt');
//     }).then(function(data){
//         console.log(data.toString());
//     });
// fs2.copyFile('./sesac.txt','./sesac2.txt')
//     .then(function(){
//         console.log('복사완료');
//     }).catch((error)=>{
//         console.error(error);
//     });
// fs2.rename('./sesac2.txt','./new.txt')
//     .then(function(){
//         console.log('change success');
//     }).catch((error)=>{
//         console.error(error);
//     });



const fs2 = require('fs').promises;
fs2.writeFile('./sesac.txt','안녕하세요')
    .then(function(){
        console.log('성공입니다.');
        return fs2.copyFile('./sesac.txt', './sesac2.txt')
    }).then(function(){
        console.log('복사 성공');
        return fs2.rename('./sesac2.txt','./new.txt');
    }).then(function(){
        console.log('이름바꾸기 성공');
    });