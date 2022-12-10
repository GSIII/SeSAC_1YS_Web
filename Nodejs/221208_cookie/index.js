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


const user = {id:'a',pw:'1'};


app.get('/',(req,res)=>{
    //req.session.user에 값이 있는지 없는지 검사
    console.log(req.session.user); //값이 undefined로 나오면 로그인 하지 않은 상태
    if(req.session.user) res.render('main',{isLogin: true, id: req.session.user});
    else res.render('main',{isLogin:false});
});

app.get('/login',(req,res)=>{
    res.render('login')
});

app.post('/login',(req,res)=>{ //로그인페이지에서 로그인 성공 or 실패 확인
    if(req.body.id == user.id && req.body.pw == user.pw){
        req.session.user = req.body.id; //로그인 성공하면 로그인세션에 user라는 키를 만들어서 아이디를 저장한다.
        res.send(true);
    }else {
        res.send(false);
    }
});

app.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err) throw err;

        res.redirect('/');
    })
})


app.listen(port,()=>{
    console.log('server open:',port);
})