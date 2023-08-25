const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shop');

router.get('/products', shopControllers.productDetails);
// router.get('/cart', shopControllers.cart);
router.get('/contact', shopControllers.contact);
router.get('/success', shopControllers.success);
router.get('/shop', shopControllers.showProducts);

module.exports = router;