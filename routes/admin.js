const express = require('express');
const adminControllers = require('../controllers/admin');
const router = express.Router();

router.get('/add-product', adminControllers.fetchByID);
router.get('/admin-product', adminControllers.getProducts);
router.get('/products/:productID', adminControllers.findByID);
router.post('/product', adminControllers.addUpdateProducts);
router.get('/delete/:productID', adminControllers.deleteByID);

module.exports = router;