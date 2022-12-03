const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/',controller.main);
router.post('/register',controller.register_user);

router.get('/login',controller.login);
router.post('/login',controller.login_user);


module.exports = router;