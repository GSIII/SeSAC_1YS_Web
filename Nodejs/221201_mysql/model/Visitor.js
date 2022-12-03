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

exports.delete_visitor = (id,cb) =>{
    var sql = `delete from visitor where id = ${id}`; //id는 controller에 있다. 삭제할 id가 필요하므로 table에서 id를 가져와야한다.

    cnn.query(sql,(err,result)=>{
        if (err) throw err;

        console.log('delete result : ',result);
        cb();
    })
}

exports.get_visitor_by_id_model = (id,cb)=>{
    var sql = `select * from visitor where id = ${id}`;

    cnn.query(sql,(err,rows)=>{
        if (err) throw err;

        console.log('select by id : ',rows);
        cb(rows[0]);//0번 index로 접근해서 다시 contorller로 보내준다.
    })
}

exports.update_visitor = (info,cb)=>{
    var sql = `update visitor set name ='${info.name}' ,comment ='${info.comment}' where id = ${info.id}`;

    cnn.query(sql,(err,result)=>{
        if(err) throw err;

        console.log('update result : ', result);
        cb();
    })
}