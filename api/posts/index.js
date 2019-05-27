const express = require('express');
const router = express.Router();
const postsController = require('./postsController')

router.route('/').post(postsController.create);
router.route('/:id')
    .get(postsController.findById);

module.exports = router;