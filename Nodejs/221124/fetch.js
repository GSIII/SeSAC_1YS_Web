const express = require('express');
const app = express();
const port = 8080; 

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.render('실습get');
});

app.get("/form",function(req,res){
    console.log(req.query);
    res.send({msg : '이름은 : '+req.query.name});
})

//url : "/form"을 받는 서버 생성
app.post('/form',function(req,res){
    console.log(req.query);
    res.send({msg : '이름은 : '+req.body.name});
});

app.post("/login", function(req,res){
    if ( req.body.id == "1" && req.body.pw == "1234" ){
        res.send({msg : "<p style='color:blue'>로그인 성공</p>"});
    } else {
        res.send("<p style='color:red;'>로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)");
    }
})

app.listen(port, ()=>{
    console.log('server open : ', port);
});