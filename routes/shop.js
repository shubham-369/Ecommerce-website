const express = require('express');
const router = express.Router();
const shop = require('../controllers/shop');

router.route('/shop.html').get(shop);

module.exports = router;