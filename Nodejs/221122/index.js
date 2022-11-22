const express = require('express');
const app = express();//필요한 메소드가 app 객체에 있다
const port = 8080; //1023이하의 숫자제외하고 쓰면된다.
app.set('view engine','ejs');//ejs사용하기 위한 코드 'ejs'템플릿을 'view engine'으로 사용하겠다.
app.use(express.urlencoded({extended:true}));//x - www-unrlencoded데이터 해석
app.use(express.json());//json형태로 parsing해주겠다. json : 딕셔너리 형태와 비슷

app.listen(port, ()=>{
    console.log('server open : ', port);
});
//express이용해서 웹서버 열어야 한다 => 위에 코드들은 무조건 외워야 한다.

app.use('/public',express.static('static'));//express안에 static메소드를 사용 해서 미들웨어 등록. static메소드 안에 들어가는 인자는 실제로 존재하는 static폴더 적어줘야한다.
//static이라는 실제 존재하는 폴더를 public경로로 접근할 수 있도록 함
//scr ="/public/img/cat.png" public이라는 가상경로로 접근해서 cat.png이미지를 연다.

//가상경로와 폴더이름을 같게 해주는 것이 보기 편하다
// app.use('/static',express.static('static'));
//scr ="/static/img/cat.png"

//브라우저 들어가서 할 행동을 지금부터 작성하자
//app.get('도메인을 제외한 주소',함수(무조건 매개변수 있어야 함))
app.get('/',(req,res) => {
    res.send('Hello Express!');
});

//app.get('/test') = >localhost:8080/test
app.get('/test',(req,res)=>{
    res.sendFile(__dirname + '/views/index.html');//__dirname : index.html 폴더 경로가 담겨있다.
});

//localhost:8080/ejs로 접속하겠다. 라우터 생성
app.get('/ejs',(req,res) => {
    res.render('index',{//기본 디렉토리를 views로 설정했기 때문에 파일 이름만 써주면 된다.
        title : 'index 페이지 입니다',
        data : ['a', 'b', 'c']
    });
});


app.get('/form',(req,res)=>{
    res.render('form');
});

app.get('/getForm',(req,res)=>{
    console.log(req.query);
    res.send('get 요청 성공');
});

app.post('/postForm',(req,res)=>{
    console.log(req.body);
    res.render('result', {data : req.body});
});
