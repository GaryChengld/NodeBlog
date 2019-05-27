var postsService = require("./postsService");

const findById = (req, res) => {
    postsService.findById(req.params.id)
        .then(result =>
            result ? res.status(200).json(result) : res.status(404).json({ "message": "post not found" })
        )
        .catch(error => onError(error, res));
};

const create = (req, res) => {
    postsService.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(error => onError(error, req));
}

const onError = (error, res) => {
    console.log(error);
    res.status(500).json(error);
}

module.exports = {
    findById, create
};
