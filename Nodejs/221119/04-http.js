const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(function(req,res){//req : 클라이언트의 요청, res : 서버의 응답
    //파일을 읽어올 수 있다.
    fs.readFile('./test.html')
    .then(function(data){
        res.end(data.toString());
    });

    
    // res.write('<h1>Hello</h1>'); 
    // res.end("<hr>");//res.end가 없는 상태에서 실행시키면 브라우저는 계속 동작중인것이다.
});

// server.on() //이벤트를 등록하는 함수 on
// server.listen() //서버를 실행하고 클라이언트를 기다린다.

server.listen(8080,function(){
    console.log('8080번 포트로 실행');
});

//터미널에서 실행중인 상태에서 웹사이트 켜서 http://localhost:8080/접속해서 실행해야한다.