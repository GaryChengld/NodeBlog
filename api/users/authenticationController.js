const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
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

const onError = (error, res) => {
    console.log(error.message);
    if (error.code == 11000) {
        res.status(403).json({ "message": 'User already registered' });
    } else if (error.message) {
        res.status(error.status || 500).json({ "message": error.message });
    } else {
        res.status(error.status || 500).json(error);
    }
}

module.exports = { register };
