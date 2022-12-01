const express = require('express');
const app = express();
const port = 8000;

app.set('view engine','ejs');

app.use('static',express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const router = require('./routes/prac1');
app.use('/',router);

app.get('*',(req,res)=>{
    res.send('주소를 잘못 입력하셨습니다. 다시 입력해주세요');
});

app.listen(port,()=>{
    console.log('server open:',port)
});