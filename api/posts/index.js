const express = require('express');
const router = express.Router();
const postsController = require('./postsController')

router.route('/').post(postsController.create);
router.route('/:id')
    .get(postsController.findById)
    .put(postsController.update)
    .delete(postsController.remove);
router.route('/author/:author').get(postsController.findByAuthor);
router.route('/latest/:limit').get(postsController.latestPosts);
module.exports = router;
