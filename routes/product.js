const express = require('express');
const { getProducts, newProduct, getPRoductById, updateProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();


router.route('/products').get(getProducts)
router.route('/product/new').post(newProduct)
router.route('/product/:id')
    .get(getPRoductById)
    .put(updateProduct)
    .delete(deleteProduct)


module.exports = router;