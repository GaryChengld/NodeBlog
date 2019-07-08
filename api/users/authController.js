const passport = require('passport');
const jwtService = require('../common/authService')
const usersService = require('./usersService');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return errorResponse(res, 400, "All fields required");
    }
    usersService.createUser(req.body)
        .then((user) => {
            const token = jwtService.generateToken(user);
            res.status(200).json({ token });
        })
        .catch((err) => onError(err, res));
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return errorResponse(res, 400, "All fields required");
    }
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return onError(err, res);
        }
        if (user) {
            const token = jwtService.generateToken(user);
            res.status(200).json({ token });
        } else {
            res.status(401).json(info);
        }
    })(req, res);
};

const onError = (error, res) => {
    console.log(error.message);
    if (error.code == 11000) {
        errorResponse(res, 403, 'User already registered');
    } else if (error.message) {
        errorResponse(res, error.status || 500, error.message);
    } else {
        res.status(error.status || 500).json(error);
    }
};

const errorResponse = (res, status, message) => {
    res.status(status).json({ "message": message });
};

module.exports = { register, login };
