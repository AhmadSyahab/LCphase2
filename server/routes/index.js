const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/gallery')
const Middleware = require('../helper/checklogin')

/* GET home page. */
router.get('/gallery', Controllers.findAll);
router.post('/gallery', Middleware.isSignIn, Controllers.create);
router.delete('/gallery/:galleryId', Middleware.isSignIn, Middleware.checkQuestionOwner, Controllers.destroy);
router.put('/gallery/like/:galleryId', Middleware.isSignIn, Controllers.like);
router.put('/gallery/:galleryId', Middleware.isSignIn, Middleware.checkQuestionOwner, Controllers.updateContent);

module.exports = router;
