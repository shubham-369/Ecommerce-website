const express = require('express');
const product = require('../controllers/admin');
const router = express.Router();

router.route('/add-product').get(product);

router.use('/product',(req, res)=>{
    res.redirect("/");
})

module.exports = router;