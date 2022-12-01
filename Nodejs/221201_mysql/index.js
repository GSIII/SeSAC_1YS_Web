const express = require('express');
const app = express();
const port = 8000;

app.set('view engine','ejs');

app.use('static',express.static(__dirname+'/static'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const router = require('./routes');
app.use('/visitor',router);//localhost:8000/visitor까지 포함되어야 라우터로 들어간다. localhost:8000/visitor뒤의 주소를 routes/index.js로 정의해야한다.


app.get('*',(req,res)=>{
    res.send('주소가 존재하지 않습니다. 다시 한 번 주소를 작성해주세요');
});

app.listen(port,()=>{
    console.log('server open:',port)
});