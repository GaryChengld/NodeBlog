const postsRouter = require('./posts/index');

const router = (app) => {
    app.use('/api/posts', postsRouter);
};

module.exports = router;