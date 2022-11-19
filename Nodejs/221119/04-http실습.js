const http = require('http');
const fs = require('fs').promises;
const server = http.createServer(function(req,res){
    fs.readFile('./221029_애벌레실습.html')
    .then(function(data){
        res.end(data.toString());
    });
});

server.listen(8080,function(){
    console.log('8080번 포트로 실행');
});