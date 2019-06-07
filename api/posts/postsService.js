const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const latestPosts = (limit) => {
    return Post.find().sort({ createdOn: "desc" })
        .limit(parseInt(limit, 5))
        .select('id title author createdOn tags');;
}

const findById = (id) => {
    console.log(`find post by id, id=${id}`);
    return Post.findById(id);
};

const findByAuthor = (author) => {
    console.log(`find post by author, author=${author}`);
    return Post.find({ author: author })
        .select('id title tags');
}

const create = (post) => {
    console.log('create a new post');
    console.log(post);
    return Post.create(post);
}

const update = (id, post) => {
    console.log(`update a post, post id=${id}`);
    console.log(post);
    return Post.findByIdAndUpdate(id, { $set: { ...post, updatedOn: Date.now() } }, { new: true });
}

const remove = (id) => {
    console.log(`remove a post, post id=${id}`);
    return Post.findByIdAndRemove(id);
}

module.exports = {
    latestPosts, findById, findByAuthor, create, update, remove
};
