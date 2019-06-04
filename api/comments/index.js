const express = require('express');
const reviewsController = require('./commentsController');
const router = express.Router();

router.route('/:postId/').post(reviewsController.addComment);

module.exports = router;
