var postsService = require("./postsService");

const findById = (req, res) => {
    postsService.findById(req.params.id)
        .then(result => res.status(200).json(result));
};

module.exports = {
    findById
};