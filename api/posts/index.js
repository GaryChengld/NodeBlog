const express = require('express');
const router = express.Router();
const postsController = require('./postsController')
const auth = require('../common/authService').auth;

router.route('/').post(auth, postsController.create);
router.route('/:id')
    .get(postsController.findById)
    .put(auth, postsController.update)
    .delete(auth, postsController.remove);
router.route('/author/:author').get(postsController.findByAuthor);
router.route('/latest/:limit').get(postsController.latestPosts);
router.route('/search/:text').get(postsController.searchPosts);
module.exports = router;
