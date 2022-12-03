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

exports.delete = (req,res)=>{
    //mysql req.body.id에 해당하는 데이터를  delete 해야한다. -> model에서 해야함
    //그 다음에 서버응답 res.send해야한다.    

    Visitor.delete_visitor(req.body.id,function(){
        res.send(true);//응답을 보낼게 없어도 응답은 보내줘야한다.
    })
}

exports.get_visitor_by_id=(req,res)=>{
    //req.query.id에 해당하는 데이터를 조회해서
    //서버로 응답을 해야한다. 조회한 데이터로 응답함
    Visitor.get_visitor_by_id_model(req.query.id,function(rows){
        res.send(rows);
    });
}

exports.update_visitor=(req,res)=>{
    //req.body데이터를 mysql에 update할 수 있도록
    //서버의 응답을 보내야 한다.
    Visitor.update_visitor(req.body,function(){
        res.send(true);
    });
}