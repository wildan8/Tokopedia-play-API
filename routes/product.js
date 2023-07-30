const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/:thumbsID', productController.getAllProduct);
router.post('/', productController.postProduct);


module.exports = router;