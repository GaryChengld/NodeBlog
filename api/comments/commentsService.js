const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const addComment = (postId, comment) => {
    return Post.findById(postId)
        .select("comments")
        .then(post => doAddComment(post, comment));
};


const doAddComment = (post, comment) => {
    if (!post) {
        return Promise.reject(postNotFoundError);
    } else {
        post.comments.push(comment);
        console.log(post);
        return post.save()
            .then(post => Promise.resolve(post.comments.pop()));
    }
}

const postNotFoundError = { status: 404, message: 'post not found' };

module.exports = { addComment };