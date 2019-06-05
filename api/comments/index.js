const express = require('express');
const commentsController = require('./commentsController');
const router = express.Router();

router.route('/:postId/').post(commentsController.addComment);
router.route('/:postId/:commentId')
    .get(commentsController.findComment)
    .delete(commentsController.deleteComment);

module.exports = router;
