const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const addComment = (postId, comment) => {
    return Post.findById(postId)
        .select("comments")
        .then(post => doAddComment(post, comment));
};

const getComment = (postId, commentId) => {    
    return Post.findById(postId)
        .then(post => doGetComment(post, commentId));
};

const deleteComment = (postId, commentId) => {
    return Post.findById(postId)
}

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
        const comment = post.comments.id(commentId);
        if (!comment) {
            return Promise.reject(commentNotFoundError);
        } else {
            return Promise.resolve(comment);
        }        
    }
};

const postNotFoundError = { status: 404, message: 'post not found' };

const commentNotFoundError = { status: 404, message: 'comment not found' };

module.exports = { addComment, getComment };