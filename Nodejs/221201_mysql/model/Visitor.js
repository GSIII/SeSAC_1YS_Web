const mysql = require('mysql');
const cnn = mysql.createConnection({ 
    host: 'localhost', 
    user: 'user', 
    password: 'gsi0901',
    database: 'sesac_test'
});

exports.get_visitor = (cb)=>{ //controller/Cvisitor.js에서 넘겨받은 콜백함수 model/Visitor.js에 데이터를 가져오기 위해 콜백함수 사용
    var sql = 'select * from visitor';
    cnn.query(sql,(err,rows)=>{//첫번째는 err, 두번째가 cnn.query의 실행결과
        if(err) throw err;
        console.log('visitor: ',rows);
        //위에 cnn.query가 끝나면 아래 콜백함수 실행 , 이해가 안되면 외우자ㅜ
        cb(rows);
    })
}

exports.register_visitor =(info,cb)=>{
    // info = req.body; req.body 에는 {name:"",comment:""}이 있다.
    var sql = `insert into visitor(name, comment) values('${info.name}','${info.comment}')`;
    cnn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('insert result: ',result);

        cb(result.insertId);
    })
}