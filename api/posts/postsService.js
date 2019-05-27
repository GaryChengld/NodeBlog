const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const findById = (id) => {
    console.log("find post by id, id=" + id);
    return Post.findById(id);
};

const create = (post) => {
    console.log(post);
    return Post.create(post);
}

module.exports = {
    findById, create
};