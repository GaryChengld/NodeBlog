var postsService = require("./postsService");

const findById = (req, res) => {
    postsService.findById(req.params.id)
        .then(result => result ? res.status(200).json(result) : notFound(res))
        .catch(error => onError(error, res));
};

const findByAuthor = (req, res) => {
    postsService.findByAuthor(req.params.author)
        .then(results => res.status(200).json(results))
        .catch(error => onError(error, res));
}

const create = (req, res) => {
    postsService.create(req.body)
        .then(result => res.status(200).json(result))
        .catch(error => onError(error, res));
};

const update = (req, res) => {
    postsService.update(req.params.id, req.body)
        .then(result => result ? res.status(200).json(result) : notFound(res))
        .catch(error => onError(error, res));
};

const remove = (req, res) => {
    postsService.remove(req.params.id)
        .then(result => result ? res.status(204).json(null) : notFound(res))
        .catch(error => onError(error, res));
};

const notFound = (res) => {
    res.status(404).json({ "message": "post not found" });
}

const onError = (error, res) => {
    console.log(error);
    res.status(error.status || 500).json(error);
}

module.exports = {
    findById, findByAuthor, create, update, remove
};
