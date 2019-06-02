var reviewsService = require('./reviewsService');

const addReview = (req, res) => {
    reviewsService.addReview(req.params.postId, req.body)
        .then(result => res.status(200).json(result))
        .catch(error => onError(error, res));
};

const reviewNotFound = (res) => {
    res.status(404).json({ "message": "review not found" });
}

const onError = (error, res) => {
    console.log(error);
    res.status(error.status || 500).json(error);
}

module.exports = { addReview };