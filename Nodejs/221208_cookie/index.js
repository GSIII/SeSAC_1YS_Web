const express = require('express');
const session = require('express-session');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(session({
    secret : '1234', //임의의 문자열을 가지고 세션을 암호화 하는 것
    resave : false, //변경사항이 없어도 다시 저장을 할건지 말건지=> true : 모든 요청마다 session에 변화가 없어도 session을 다시 저장함
    saveUninitialized : true, //초기화되지 않은 세션을 저장하냐 마냐
    // cookie : { //session id 쿠키에 대한 옵션
    //     httpOnly : true,
    //     maxAge : 
    // }, 
    // secure : true //보안서버에서만 작동
}))

app.get('/',(req,res)=>{
    res.render('main')
});

app.get('/loginPage',(req,res)=>{
    res.render('loginPage')
});

app.get('/',(req,res)=>{
    if(req.session.user) res.render('',{isLogin:true})//user키가 있으면 로그인을 한 상황 => isLogin:true를 클라이언트에게 보내서 그에 따른 동작을 처리하게한다. 예를 들어 navbar를 바꿔 보여주던지...
    else res.render('',{isLogin:false})
    // res.send('세션수업')
});

const user = {id:'a',pw:'1'};

app.post('/login',(req,res)=>{//로그인 했을 때 req.session.user만들기
    if(req.body.id == user.id && req.body.pw == user.pw){//로그인 성공했다면 
        req.session.user = req.body.id; //내 공간에 내 아이디 저장한 것
        res.send('로그인 성공');
    }
    else {
        res.send('로그인 실패');
    }
    //req.session={}
    // req.session.user = 'haha'; 
    // res.send('세션 생성 성공');
});

// app.destroy('/logout',(req,res)=>{//로그아웃했을 때 req.session.user없애버릴 것
//     req.session.destroy(function(err){
//         if(err) throw err;

//         res.send('로그아웃 성공');
//     })

// })

app.listen(port,()=>{
    console.log('server open:',port);
})