const express = require('express');
const router = express.Router();
const commentsController = require('../controller/commentController');

router.get('/:thumbsID', commentsController.getAllComment);
router.post('/', commentsController .postComment);


module.exports = router;