const express = require('express');
const router = express.Router();
const authController = require('./authenticationController')

router.route('/register').post(authController.register);

module.exports = router;