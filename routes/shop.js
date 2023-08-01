const express = require('express');
const router = express.Router();
const path = require('path');

const shopPath = path.join(__dirname,'..' , 'views', 'shop.html');
router.get('/shop.html',(req, res)=>{
    res.sendFile(shopPath);
})

module.exports = router;