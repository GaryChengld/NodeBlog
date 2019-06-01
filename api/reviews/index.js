const express = require('express');
const router = express.Router();


router.route('/:postId/').post();
router.route('/:postId/:reviewId')
    .get()
    .put()
    .delete();

module.exports = router;
