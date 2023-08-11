const express = require('express');
const adminControllers = require('../controllers/admin');
const router = express.Router();

router.get('/admin-product', adminControllers.getProducts);
router.get('/admin', adminControllers.adminProduct);
router.post('/product', adminControllers.addProducts);

module.exports = router;