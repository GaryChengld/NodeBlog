var commentsService = require('./commentsService');

const addComment = (req, res) => {
    commentsService.addComment(req.params.postId, req.body)
        .then(result => res.status(200).json(result))
        .catch(error => onError(error, res));
};

const commentNotFound = (res) => {
    res.status(404).json({ "message": "comment not found" });
}

const onError = (error, res) => {
    console.log(error);
    res.status(error.status || 500).json(error);
}

module.exports = { addComment };