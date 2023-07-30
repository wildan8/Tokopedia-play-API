const express = require('express');
const router = express.Router();
const thumbnailController = require('../controller/thumbnailController');

router.get('/', thumbnailController.getAllThumbnail);
router.post('/', thumbnailController.postThumbnail);

module.exports = router;