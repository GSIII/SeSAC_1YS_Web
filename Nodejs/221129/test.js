const mysql = require('mysql');
const cnn = mysql.createConnection({ //createConnection안에 적어둔 옵션에 해당하는 것에 연결해준다.
    host: 'localhost', //ip나 접속할 수 있는 주소를 적어주면 된다.
    user: 'user', //root 사용자로는 외부에서 접속하도록(코드로서 접속하는 것을) 허용하지 않는다. ->mysql에서 새로운 계정 만들어야 한다.
    password: 'gsi0901',
    database: 'sesac_test'
})

cnn.query('select * from user',(err,result)=>{//cnn.query안에 sql문을 써주면 그에 해당하는 일을 수행한다.
    if (err) throw err;

    console.log(result);//에러가 발생하지 않으면 result출력

});