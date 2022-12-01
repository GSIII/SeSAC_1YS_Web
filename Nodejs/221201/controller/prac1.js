exports.main = (req,res)=>{
    res.render('prac1'); //views에서 로그인페이지인 prac1.ejs파일을 가져오는 것
}

exports.axios = (req,res) =>{
    console.log(req.body); //로그인 정보 터미널에 출력
    if ( req.body.id === "1" && req.body.pwd === "1234" ){
        res.send("<p style='color:blue'>로그인 성공</p>");
    } else {
        res.send("<p style='color:red;'>로그인 실패 ( 아이디 또는 비밀번호가 틀렸습니다.)");
    }
}
