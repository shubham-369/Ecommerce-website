const express = require('express');
const path = require('path');
const router = express.Router();

const addProduct = path.join(__dirname,'..' , 'views', 'add-product.html');
router.get('/add-product',(req, res)=>{
    res.sendFile(addProduct);
})

router.use('/product',(req, res)=>{
    console.log(req.body);
    res.redirect("/");
})

module.exports = router;