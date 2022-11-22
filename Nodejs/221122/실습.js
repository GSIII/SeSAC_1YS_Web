const express = require('express');
const app = express();
const port = 8080; 
app.set('view engine','ejs');

app.listen(port, ()=>{
    console.log('server open : ', port);
});


//localhost:8080/ejs로 접속하겠다.
app.get('/img',(req,res) => {
    res.render('실습')
});


app.use('/static',express.static('static'));