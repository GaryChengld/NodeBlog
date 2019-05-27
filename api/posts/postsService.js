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
    return new Promise((resolve, reject) => {
        Post.findById(id)
            .select('-comments')
            .exec((err, result) => {
                if (err) {
                    reject(err);
                } else if (!result) {
                    resolve(null);
                } else {
                    result.author = post.author;
                    result.title = post.title;
                    result.body = post.body;
                    result.tags = post.tags;
                    result.updatedOn = new Date();
                    result.save((err, savedPost) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(savedPost);
                        }
                    })
                }
            })
    });
}

module.exports = {
    findById, create, update
};
