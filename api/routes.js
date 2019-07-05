var routers = [];
routers.push({ path: '/api/posts', handler: require('./posts/index') });
routers.push({ path: '/api/comments', handler: require('./comments/index') });
routers.push({ path: '/api/users', handler: require('./users/index') });

module.exports = routers;
