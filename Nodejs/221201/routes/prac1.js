var express = require('express');
var controller = require('../controller/prac1');
const router = express.Router();

router.get('/',controller.main);//먼저 로그인페이지를 가져오는 라우터를 만들었다.

router.post('/form',controller.axios);//post요청이니까 router.post라고 해야한다. 로그인 버튼을 클릭했을 때 메시지가 뜨는 것을 처리하기 위한 라우터를 생성했다.
//라우터의 주소는 prac1.ejs파일에서 sendPost()버튼을 눌렀을 때 작동하는 url을 써줘야한다.

module.exports = router;