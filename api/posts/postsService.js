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

const update = (id, post) => {
    console.log("update post, post id=" + id);
    var data = {
        author: post.author,
        title: post.title,
        body: post.body,
        tags: post.tags,
        updatedOn: new Date()
    };
    return Post.findByIdAndUpdate(id, { $set: data }, { new: true });
}

const remove = (id) => {
    console.log("remove post, post id=" + id);
    return Post.findByIdAndRemove(id);
}

module.exports = {
    findById, create, update, remove
};
