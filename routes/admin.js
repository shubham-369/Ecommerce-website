const express = require('express');
const {products, data} = require('../controllers/admin');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended:true}));


router.route('/add-product').get(products);

router.route('/product').post(data);

module.exports = router;