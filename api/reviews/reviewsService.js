const mongoose = require('mongoose');
const Post = mongoose.model('Post');

const addReview = (postId, review) => {
    return Post.findById(postId)
        .select("comments")
        .then(post => doAddReview(post, review));
};


const doAddReview = (post, review) => {
    if (!post) {
        return Promise.reject(postNotFoundError);
    } else {
        post.comments.push(review);
        console.log(post);
        return post.save()
            .then(post => Promise.resolve(post.comments.pop()));
    }
}

const postNotFoundError = { status: 404, message: 'post not found' };

module.exports = { addReview };