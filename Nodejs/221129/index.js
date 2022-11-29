const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8000;

const cnn = mysql.createConnection({ 
    host: 'localhost', 
    user: 'user',
    password: 'gsi0901',
    database: 'sesac_test'
})

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    cnn.query('select * from user',(err,result)=>{
        if (err) throw err;
    
        console.log(result);//에러가 발생하지 않으면 result출력
        res.render('index', { rows: result });
    });
});

app.listen(port, ()=>{
    console.log( "Server Port : ", port );
});