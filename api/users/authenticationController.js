var authenticationService = require('./authenticationService');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    } else {
        authenticationService.register(req.body.name, req.body.email, req.body.password)
            .then((user) => res.status(200).json({ token: user.generateJwt() }))
            .catch((error) => onError(error, res));
    }
}

const onError = (error, res) => {
    console.log(error.message);
    res.status(error.status || 500).json(error);
}

module.exports = { register };
