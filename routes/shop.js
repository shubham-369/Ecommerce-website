const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shop');

router.get('/', shopControllers.shop);
router.get('/contact', shopControllers.contact);
router.get('/success', shopControllers.success);

module.exports = router;