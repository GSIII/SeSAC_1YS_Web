const Visitor = require('../model/Visitor');

//localhost:8000/visitor/로 들어왔을 때 행위를 아래에 적어주겠다.
exports.visitor = (req,res) =>{
    Visitor.get_visitor(function(result){ //콜백함수 넘겨주고있다. model/Visitor.js로 가면 cb로 매개변수 받고 있다.
        console.log(result);
        res.render('visitor',{data:result});//visitor과 visitor.ejs로 넘겨줄 값을 렌더하고있다.
    })
}

exports.register = (req,res)=>{
    Visitor.register_visitor(req.body,function(id){//클라이언트가 입력한 이름과 코멘트도 넘겨줘야한다. 그래서 req.body도 넘겨줘야한다.
        console.log(id);
        res.send(String(id)); //cnn.query를 날려서 나온 결과값 이때 id는 int값이라서 String으로 바꿔야한다.
    });
}