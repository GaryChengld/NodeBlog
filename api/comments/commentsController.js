var commentsService = require('./commentsService');

const addComment = (req, res) => {
    commentsService.addComment(req.params.postId, req.body)
        .then(result => res.status(200).json(result))
        .catch(error => onError(error, res));
};

const findComment = (req, res) => {
    console.log(`postId=${req.params.postId}, commentId=${req.params.commentId}`);
    commentsService.getComment(req.params.postId, req.params.commentId)
        .then(result => res.status(200).json(result))
        .catch(error => onError(error, res));
}

const deleteComment = (req, res) => {
    commentsService.deleteComment(req.params.postId, req.params.commentId)
        .then(result => res.status(204).json(null))
        .catch(error => onError(error, res));
}

const onError = (error, res) => {
    console.log(error);
    res.status(error.status || 500).json(error);
}

const notFound = (res) => {
    res.status(404).json({ "message": "comment not found" });
}

module.exports = { addComment, findComment, deleteComment };