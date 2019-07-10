const express = require('express');
const commentsController = require('./commentsController');
const router = express.Router();
const auth = require('../common/authService').auth;

router.route('/:postId/').post(auth, commentsController.addComment);
router.route('/:postId/:commentId')
    .get(commentsController.findComment)
    .delete(auth, commentsController.deleteComment);

module.exports = router;
