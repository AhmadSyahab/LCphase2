const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/user')

/* GET users listing. */
router.post('/signin', Controllers.signIn);

router.post('/singup', Controllers.signUp);

module.exports = router;
