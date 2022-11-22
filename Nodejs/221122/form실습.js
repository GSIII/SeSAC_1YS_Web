const express = require('express');
const app = express();
const port = 8080; 
app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port, ()=>{
    console.log('server open : ', port);
});


app.get('/form',(req,res)=>{
    res.render('form실습');
});

app.post('/postForm',(req,res)=>{
    console.log(req.body);
    res.send('post 요청 성공');
});
