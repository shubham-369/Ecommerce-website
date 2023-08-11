const express = require('express');
const router = express.Router();

router.use((req, res)=> {
    res.status(404).sendFile('shop/404-error.html', { root: 'views' });
});
module.exports = router;