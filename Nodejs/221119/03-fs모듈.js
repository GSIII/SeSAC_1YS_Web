//콜백함수 이용
const fs = require('fs');
fs.readFile('./test.txt',function(err,data){
    if (err) throw err;

    console.log('data : ',data);
    //문자로 바꿔줘야 한다.
    console.log('data2 : ', data.toString());

});


//promise이용
const fs2 = require('fs').promises;
fs2.readFile('./test.txt')
    .then((data)=>{
        console.log('promise - data : ', data);
    });


//promise이용해서 새 파일 만들기
fs2.writeFile('./write.txt', 'sesac')
    .then(function(){
        return fs2.readFile('./write.txt');
    }).then(function(data){
        console.log(data.toString());
    });


//callback이용
fs.writeFile('./write2.txt','codingon', function(err){
    if(err) throw err;
    console.log('writeFile success');
    fs.readFile('./write2.txt', function(err,data){
        if (err) throw err;
        console.log('write2File data : ', data.toString());
    })
});