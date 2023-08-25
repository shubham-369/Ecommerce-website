const express = require('express');
const adminControllers = require('../controllers/admin');
const router = express.Router();

router.get('/delete/:deleteID', adminControllers.deleteByID);
router.get('/admin-product', adminControllers.getProducts);
router.post('/product', adminControllers.addUpdateProducts);
router.get('/add-product', adminControllers.fetchByID);

module.exports = router;