const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return errorResponse(res, 400, "All fields required");
    }
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save((err) => {
        if (err) {
            onError(err, res);
        } else {
            const token = user.generateJwt();
            res.status(200).json({ token });
        }
    })
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
            const token = user.generateJwt();
            res.status(200).json({ token });
        } else {
            res.status(401).json(info);
        }
    })(req, res);
}

const onError = (error, res) => {
    console.log(error.message);
    if (error.code == 11000) {
        errorResponse(res, 403, 'User already registered');
    } else if (error.message) {
        errorResponse(res, error.status || 500, error.message);
    } else {
        res.status(error.status || 500).json(error);
    }
}

const errorResponse = (res, status, message) => {
    res.status(status).json({ "message": message });
}

module.exports = { register, login };
