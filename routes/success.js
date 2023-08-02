const express = require('express');
const router = express.Router();
const success = require('../controllers/success');

router.route('/success.html').get(success)

module.exports = router;