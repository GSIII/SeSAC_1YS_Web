const express = require('express');
const multer = require('multer');//multer를 불러오자
const path = require('path');//path모듈 불러오기
const app = express();
const port = 8080; 

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//파일 경로설정 => 이 방법은 파일 저장은 되지만 파일이 열리지 않는다.
// const upload = multer({
//     dest:"uploads/"
// });

//multer이용해서 파일 저장할 때 세부적으로 설정할 것
const upload = multer({
    storage : multer.diskStorage({
        destination(req,res,done){
            done(null,'uploads/') //첫번째 인자는 에러있을 때 받을 null, 두번째 인자는 파일 경로
        },
        filename(req,file,done){
            console.log(req.body);
            const ext = path.extname(file.originalname);
            const filename = req.body.name + ext;
            done(null, filename);
        }
    })
});

app.get('/file',(req,res)=>{
    res.render('file');
});

app.post('/upload',upload.single('userfile'), (req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.send('upload complete');
});

app.post('/upload-array',upload.array('userfile'), (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send('upload complete');
});

app.post('/upload-fields',upload.fields([{name:'userfile1'},{name:'userfile2'},{name:'userfile3'}]), (req,res)=>{
    console.log(req.files);
    console.log(req.body);
    res.send('upload complete');
});



//미들웨어
//미들웨어함수 =>url과 동작하는 함수 사이에 쓴다. =>url로 접속 했을 때 test함수 먼저 실행하고 동작함수 실행한다.
app.get("/",test,test2,(req,res)=>{
    console.log('req.name : ', req.name);
    console.log('hello');
    res.send('hello');
});

//미들웨어함수
function test(req,res,next){
    req.name = '12345';
    console.log(req.query);
    console.log('test함수입니다.');
    next(); //test미들웨어 함수가 끝났고 그 다음을 진행해라 이것을 써두지 않으면 다음함수가 실행되지 않는다.
}

function test2(req,res,next){
    console.log('test2함수입니다.');
    next();//test미들웨어 함수가 끝났고 그 다음을 진행해라
}
app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});