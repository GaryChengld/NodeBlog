const express = require('express');
const reviewsController = require('./reviewsController');
const router = express.Router();

router.route('/:postId/').post(reviewsController.addReview);

module.exports = router;
