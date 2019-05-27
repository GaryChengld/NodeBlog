var postsService = require("./postsService");

const findById = (req, res) => {
    postsService.findById(req.params.id)
        .then(post => {
            if (!post) {
                res.status(404).json({ "message": "post not found" });
            } else {
                res.status(200).json(result);
            }
        })
        .catch(error => res.status(500).json(error));
};

module.exports = {
    findById
};