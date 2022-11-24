const express = require('express');
const app = express();
const port = 8080; 

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.get('/',(req,res)=>{
    res.render('실습post');
});


//post로 전송
app.post('/form',function(req,res){
    var {id,password} = req.body;
    console.log(req.body);
    if (id==='iii' && password==='1234'){
        res.send("<p style = 'color:blue'>로그인 성공</p>");
    } else if (id !== 'iii' && password ==='1234'){
        res.send({msg : '아이디를 다시 입력해주세요'});
    } else if (id ==='iii' && password ==='1234'){
        res.send({msg : '비밀번호를 다시 입력해주세요'});
    }   
});

app.listen(port, ()=>{
    console.log('server open : ', port);
});

