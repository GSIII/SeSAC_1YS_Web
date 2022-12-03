const Test = require('../model/Test');

exports.main=(req,res) =>{
    res.render('index');
}

exports.register_user=(req,res)=>{
    Test.register_user(req.body,function(result){
        res.send({result});
    })
}

exports.login=(req,res)=>{
    res.render('login');
}

exports.login_user=(req,res)=>{
    Test.login_user(req.body.id,req.body.password,function(result){
        if (result.length=0){
            res.send({result:result,flag:false})
        } else {
            res.send({result:result,flag:true})
        }
    })
}