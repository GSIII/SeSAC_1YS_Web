var express = require('express');
var controller = require('../controller/Cmain');
const router = express.Router();

router.get('/',controller.main);//라우터에 대한 모든 정의를 하는 곳

router.get('/test',controller.test);

router.post('/postForm',controller.post);

module.exports = router;//최상위 index.js에서 require('./routes')를 했으니 이 파일에서 exports를 해줘야한다. => 이파일에서 5번째 줄에 정의한 router가 최상위 index.js에 담긴다.





router.get('')