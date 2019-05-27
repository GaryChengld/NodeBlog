const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const post = {
    title: 'theTitle',
    content: 'theContent'
};

const findById = (id) => {
    console.log("find post by id, id=" + id);
    return Post.findById(id);
};

module.exports = {
    findById
};