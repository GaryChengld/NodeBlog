const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const addComment = (postId, comment) => {
    return Post.findById(postId)
        .select("comments")
        .then(post => doAddComment(post, comment));
};

const getComment = (postId, commentId) => {
    console.log(`find comment, postId=${postId}, commentId=${commentId}`);
    return Post.findById(postId)
        .then(post => doGetComment(post, commentId));
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

const doGetComment = (post, commentId) => {   
    if (!post) {
        return Promise.reject(postNotFoundError);
    } else {
        return Promise.resolve(post.comments.id(commentId));
    }
};

const postNotFoundError = { status: 404, message: 'post not found' };

module.exports = { addComment, getComment };