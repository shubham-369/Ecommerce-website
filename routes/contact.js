const express = require('express');
const router = express.Router();
const path = require('path');

const contactPath = path.join(__dirname,'..' , 'views', 'contact.html');
router.get('/contact.html',(req, res)=>{
    res.sendFile(contactPath);
})


module.exports = router;