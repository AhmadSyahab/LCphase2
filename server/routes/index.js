const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/gallery')

/* GET home page. */
router.post('/gallery', Controllers.create);

module.exports = router;
