const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname+"/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.use(cookieParser());

// app.get('/',(req,res)=>{
//     res.send('hello');
// });

const option = {
    httpOnly: true, //클라이언트가 document.cookie 접근할 수 없게 함. 자바스크립트로 쿠키를 조작하는 것을 막는다. 즉 document.cookies이렇게 쓸 수 없다는 것이다. 
    maxAge: 60*60*24*1000, //만들어진 순간부터 초만큼 뒤에 만료(ms단위) ex) 30000=>30초 뒤에 만료
    // expires: '2022-12-09T09:00:00', //만료일을 정해줌 GMT시간 ex) 2022-12-09T09:00:00 221209일 아침 9시 만료
    // path: '/visitor', //localhost:8000경로에서는 쿠키 없음. localhost:8000/visitor~~~ /visitor만 포함된 모든 경로에만 쿠키가 있음
    // secure: false, //true라고 할 경우 https 보안서버에만 적용됨. https -> 보안서버
    // signed: true //true라고 할 경우 암호화 한다. default는 false
}

app.get('/',(req,res)=>{
    //req.cookies.popup의 값을 비교해서 1이 아니면 display ,1이면 'none' /1
    if(req.cookies.popup=='1') res.render('index',{popup:'none'});
    else res.render('index',{popup:'block'});
});

app.post('/setpopup',(req,res)=>{
    //1.쿠키를 만든다. 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키 생성 => {popup:1}생성 
    res.cookie('popup','1',option);
    //2. 서버응답 res.send
    res.send(true);
});








app.get('/set',(req,res)=>{
    res.cookie('test','1',option);
    res.send('쿠키 생성 성공'); 
});

app.get('/get',(req,res)=>{
    console.log(req.cookies);
    console.log(req.cookies.test);
    res.send(req.cookies); //쿠키를 가지고 있는 곳은 클라이언트, 서버에서 쿠키를 가져올때는 req객체를 통해서 쿠키를 가져올 수 있다.
});


app.listen(port,()=>{
    console.log('server open:',port);
})