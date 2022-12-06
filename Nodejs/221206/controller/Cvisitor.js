// const Visitor = require("../model/Visitor");
const { Visitor } = require("../model"); //구조분해할당

exports.visitor = async (req, res) => {
    //async await문
    let result = await Visitor.findAll(); //Visitor.findAll()가 실행될때 까지 기다리고 실행 결과를 result에 담은 다음 다음줄을 실행시킨다. 
    res.render("visitor", {data: result});

    //promise사용
    // Visitor.findAll() //select * from visitor와 같음
    // .then((result)=>{
    //     console.log(result);
    //     console.log('id : ',result[0].id);
    //     res.render("visitor", {data: result});
    // })

    //sql문
    //select * from visitor;
    // Visitor.get_visitor(function(result){
    //     console.log(result);
    //     res.render("visitor", {data: result});
    // })
}

exports.register = async (req, res) => {
    //async await문
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }
    let result = await Visitor.create(data);
    console.log(result);
    res.send(String(result.id));


    //promise문
    // Visitor.create(data)
    // .then((result)=>{
    //     console.log(result);
    //     res.send(String(result.id));
    // })

    //sql문
    //`insert into visitor(name, comment) values('${req.body.name}','${req.body.comment}')`
    // Visitor.register_visitor( req.body, function(id){
    //     console.log(id);
    //     res.send(String(id));
    // })
}

exports.delete = async (req, res) => {
    // mysql req.body.id에 해당하는 데이터를 delete
    // 서버 응답 res.send 
    //async await문
    let result = await Visitor.destroy({
        where : {id:req.body.id}
    });
    console.log(result);
    res.send(true);


    //promise문
    // Visitor.destroy({
    //     where : {id:req.body.id}
    // })
    // .then((result)=>{
    //     console.log(result); //destroy의 결과는 성공여부 => 1 출력
    //     res.send(true);
    // })


    //sql문
    //`delete from visitor where id = ${req.body.id}`;
    // Visitor.delete_visitor(req.body.id, function(){
    //     res.send(true);
    // })
}

exports.get_visitor_by_id = async (req, res) => {
    // req.query.id 에 해당하는 데이터를 조회
    // 서버 응답 > 조회한 데이터
    //async await문
    let result = await Visitor.findOne({
        attributes : ["id","name","comment"], //select id, name, comment from visitor
        where : { id:req.query.id },

        order : [["id", "DESC"]],//select id, name, comment from visitor order by id DESC
        limit : 1 //select id, name, comment from visitor order by id DESC limit 1
    });
    res.send(result);


    //promise문
    // Visitor.findAll({where : {id:req.query.id},limit:1}) //findAll사용할 경우 limit걸어줘야한다.
    // Visitor.findOne({
    //     where : { id : req.query.id }
    // })
    // .then((result)=>{
    //     res.send(result);
    // })

    //sql문
    //select * from visitor where id = req.query.id;
    // Visitor.get_visitor_by_id_model(req.query.id, function(rows){
    //     res.send(rows);
    // });
}

exports.update_visitor = async (req, res) => {
    // req.body 데이터를 mysql 에 update 할 수 있도록
    // 서버의 응답
    //async await문
    let data = {
        name : req.body.name,
        comment : req.body.comment
    }
    let result = await Visitor.update(data,{
        where : {id:req.body.id}
    });
    console.log(result);
    res.send(true);


    //promise문
    // let data = {
    //     name : req.body.name,
    //     comment : req.body.comment
    // }
    // Visitor.update(data, {   //update문에는 인자 두개 첫번째는 어떻게 바꿀건지 두번째는 조건을 모두 객체형태로
    //     where : {id:req.body.id}
    // })
    // .then((result)=>{
    //     console.log(result); //update의 결과는 성공여부 => 1출력 만약 실패했다면 콘솔에 0출력할 것이다.
    //     res.send(true);
    // })

    //sql문
    //`update visitor set name ='${req.body.name}' ,comment ='${req.body.comment}' where id = ${req.body.id}`;
    // Visitor.update_visitor(req.body, function(){
    //     res.send(true);
    // });
}