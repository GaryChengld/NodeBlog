const express = require('express');
const router = express.Router();
const postsController = require('./postsController')

router.route('/').post(postsController.create);
router.route('/:id')
    .get(postsController.findById)
    .put(postsController.update)
    .delete(postsController.remove);

module.exports = router;
