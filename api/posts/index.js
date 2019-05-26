const express = require('express');
const router = express.Router();
const postsController = require('./postsController')

router.route('/:id')
    .get(postsController.findById);

module.exports = router;