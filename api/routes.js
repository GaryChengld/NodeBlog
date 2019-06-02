const postsRouter = require('./posts/index');
const reviewsRouter = require('./reviews/index');

const router = (app) => {
    app.use('/api/posts', postsRouter);
    app.use('/api/reviews', reviewsRouter);
};

module.exports = router;