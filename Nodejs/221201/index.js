const express = require('express');
const app = express();
const port = 8000;

app.set('view engine','ejs');

app.use('static',express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const router = require('./routes');//상대경로로 폴더까지만 작성해도 index.js를 자동으로 찾는다. 만약 routes안에 test.js파일을 찾고 싶다면 ./routes/test.js로 명시해줘야한다.
app.use('/',router);//기본 경로(localhost:8000)나 다른 경로(localhost:8000/saf등등)로 와도 다 라우터로 이동시킬것이다.

//app.get('*')=>모든 라우터, 내가 정의해둔 라우터가 아닌 다른 라우터로 접속하면 에러를 띄운다.=>모든 라우터 정의한 후에 마지막에 써줘야 한다.
app.get('*',(req,res)=>{
    res.send('주소가 존재하지 않습니다. 다시 한 번 주소를 작성해주세요');
});

app.listen(port,()=>{
    console.log('server open:',port)
});