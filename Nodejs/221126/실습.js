const express = require('express');
const multer = require('multer');//multer를 불러오자
const path = require('path');//path모듈 불러오기
const app = express();
const port = 8080; 

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/static',express.static('uploads'));

//multer이용해서 파일 저장할 때 세부적으로 설정할 것
const upload = multer({
    storage : multer.diskStorage({
        destination(req,res,done){
            done(null,'uploads/') //첫번째 인자는 에러있을 때 받을 null, 두번째 인자는 파일 경로
        },
        filename(req,file,done){
            console.log(req.body);
            const ext = path.extname(file.originalname);
            const filename = req.body.id + ext;
            done(null, filename);
        }
    })
});

app.get('/file',(req,res)=>{
    res.render('실습');
});

app.post('/upload',upload.single('userfile'), (req,res)=>{
    console.log(req.file);
    console.log(req.body);
    res.render('실습성공',{filename:req.file.filename});
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});