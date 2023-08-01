const express = require('express');
const router = express.Router();
const path = require('path');

const submitPath = path.join(__dirname,'..' , 'views', 'success.html');
router.get('/success.html',(req, res)=>{
    res.sendFile(submitPath);
})

module.exports = router;