const express = require('express');
const router = express.Router();
const Controllers = require('../controllers/gallery')

/* GET home page. */
router.get('/gallery', Controllers.findAll);
router.post('/gallery', Controllers.create);
router.delete('/gallery/:galleryId', Controllers.destroy);
router.put('/gallery/like/:galleryId', Controllers.like);

module.exports = router;
