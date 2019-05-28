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
    return Post.findById(id)
        .select('-comments')
        .then(result => {            
            if (result) {
                result.author = post.author;
                result.title = post.title;
                result.body = post.body;
                result.tags = post.tags;
                result.updatedOn = new Date();
                return result.save();
            } else {
                return new Promise((resolve, reject) => resolve(null));
            }
        })
}

module.exports = {
    findById, create, update
};
