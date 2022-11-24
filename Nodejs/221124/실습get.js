const express = require('express');
const app = express();
const port = 8080; 

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.render('실습get');
});

//url : "/form"을 받는 서버 생성
app.get('/form',function(req,res){
    console.log(req.query);
    res.send({msg : '이름은 : '+req.query.name+' '+'성별은 : '
    +req.query.gender+' '+'나이는 : '+req.query.birthYear+'년'+req.query.birthMonth+'월'+req.query.birthDay+'일'});
});

app.listen(port, ()=>{
    console.log('server open : ', port);
});