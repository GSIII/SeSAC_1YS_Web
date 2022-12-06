// const User = require("../model/User");
const { User } = require("../model");

exports.index = (req,res) => {
    res.render("index");
}

exports.signup = (req,res) => {
    res.render("signup");
}
exports.post_signup = async (req,res) => {
    let data = {
        id : req.body.id,
        name : req.body.name,
        pw : req.body.pw
    }
    await User.create(data);
    res.send(true);


    //promise
    // var data = {
    //     id: req.body.id,
    //     name: req.body.name,
    //     pw: req.body.pw
    // }

    // User.create(data)
    // .then(()=>{ res.send(true); })


    //sql
    // `INSERT INTO user(id, name, pw) VALUES('${data.id}','${data.name}','${data.pw}');`
    // User.post_signup(req.body, function(){
    //     res.send(true);
    // });
}

exports.signin = (req,res) => {
    res.render("signin");
}
exports.post_signin = async (req,res) => {
    let result = await User.findAll({
        where : {id:req.body.id,pw:req.body.pw},limit:1
    });
    if ( result.length > 0 ) res.send(true);
    else res.send(false);


    //promise
    // User.findOne({
    //     where: {
    //         id: req.body.id,
    //         pw: req.body.pw
    //     }
    // }).then((result)=>{
    //     if ( result ) res.send(true);
    //     else res.send(false);
    // })

    //sql
    // `SELECT * FROM user WHERE id='${id}' and pw='${pw}' limit 1;`
    // User.post_signin(req.body.id, req.body.pw, function(result){
    //     if ( result.length > 0 ) res.send(true);
    //     else res.send(false);
    // });
}

exports.profile = async (req,res) => {
    let result = await User.findAll({
        where :{id:req.body.id},limit:1
    });
    if ( result.length > 0 ) res.render("profile", {data: result[0]});
    else res.redirect("/user/signin");

    //promise
    // User.findOne({
    //     where: { id: req.body.id }
    // }).then((result)=>{
    //     if ( result ) res.render("profile", {data: result});
    //     else res.redirect("/user/signin");
    // })

    //sql
    // `SELECT * FROM user WHERE id='${id}' limit 1;`
    // User.get_user(req.body.id, function(result){
    //     if ( result.length > 0 ) res.render("profile", {data: result[0]});
    //     else res.redirect("/user/signin");
    // })
}

exports.profile_edit = async (req,res) => {
    let data = {
        name : req.body.name,
        pw : req.body.pw
    }
    let result = await User.update(data,{
        where : {id:req.body.id}
    });
    console.log(result);
    res.send(true);

    //promise
    // var data = {
    //     name: req.body.name,
    //     pw: req.body.pw
    // }
    // User.update(data, {
    //     where: { id: req.body.id }
    // }).then(()=>{
    //     res.send(true);
    // })

    //sql
    // `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id='${data.id}'`;
    // User.update_profile(req.body, function(){
    //     res.send(true);
    // })
}
exports.profile_delete = async (req,res) => {
    let result = await User.destroy({
        where : {id:req.body.id}
    });
    console.log(result);
    res.send(true);


    //promise
    // User.destroy({
    //     where: { id: req.body.id }
    // }).then(()=>{
    //     res.send(true);
    // })

    //sql
    // `DELETE FROM user WHERE id='${id}'
    // User.delete_user(req.body.id, function(){
    //     res.send(true);
    // })
}