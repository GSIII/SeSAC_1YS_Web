const Test = require('../model/Test');


exports.main = (req,res)=>{//라우터정의할 때 썼던 함수는 모두 이 파일에 있어야 한다.
    let hi = Test.hello(); //Test.js에서 리턴하고 있는 'hello'문자열이 hi라는 변수에 담긴다.
    res.send(hi);
    // res.render('index');
}

exports.test = (req,res) =>{
    res.send('test');
}

exports.post = (req,res)=>{
    res.send('post');
}

