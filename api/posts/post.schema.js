const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    author: String,
    comment: { type: String, require: true },
    createdOn: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
    author: { type: String, require: true },
    title: { type: String, require: true },
    body: { type: String, require: true },
    createdOn: { type: Date, default: Date.now },
    updatedOn: { type: Date, default: Date.now },
    comments: [commentSchema]
}, { collation: 'Posts' });

mongoose.model("Post", postSchema);