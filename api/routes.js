const postsRouter = require('./posts/index');
const commentsRouter = require('./comments/index');

const router = (app) => {
    app.use('/api/posts', postsRouter);
    app.use('/api/comments', commentsRouter);
};

module.exports = router;