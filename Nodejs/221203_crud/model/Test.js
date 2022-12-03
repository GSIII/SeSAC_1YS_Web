const mysql = require('mysql');
const cnn = mysql.createConnection({ 
    host: 'localhost', 
    user: 'user', 
    password: 'gsi0901',
    database: 'sesac_test'
});

exports.register_user = (info,cb) =>{
    var sql = `insert into user values('${info.id}','${info.name}','${info.password}') `;

    cnn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('insert result: ',result);

        cb(result);
    })
}

exports.login_user = (id,password,cb)=>{
    var sql = `select * from user where id=${id}`;
    cnn.query(sql,(err,rows)=>{
        if(err) throw err;
        console.log('login:',rows)
        cb(rows[0]);
    })
}