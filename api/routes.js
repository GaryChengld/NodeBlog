var routers = [];
routers.push({ url: '/api/posts', router: require('./posts/index') });
routers.push({ url: '/api/comments', router: require('./comments/index') });
routers.push({ url: '/api/users', router: require('./users/index') });

module.exports = routers;
