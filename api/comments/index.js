const express = require('express');
const reviewsController = require('./commentsController');
const router = express.Router();

router.route('/:postId/').post(reviewsController.addComment);
router.route('/:postId/:commentId').get(reviewsController.findComment);

module.exports = router;
