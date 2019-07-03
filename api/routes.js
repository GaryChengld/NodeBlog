const postsRouter = require('./posts/index');
const commentsRouter = require('./comments/index');
const usersRouter = require('./users/index');

const router = (app) => {
    app.use('/api/posts', postsRouter);
    app.use('/api/comments', commentsRouter);
    app.use('/api/users', usersRouter);
};

module.exports = router;