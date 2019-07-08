const httpJwt = require('express-jwt');
const jsonWebToken = require('jsonwebtoken');
const userServices = require('../users/usersService');

const auth = httpJwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});

const generateToken = (user) => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jsonWebToken.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, process.env.JWT_SECRET);
};

const getAuthUser = (req, res, callback) => {
    console.log(req.payload);
    if (req.payload && req.payload.email) {
        userServices.findUser(req.payload.email)
            .then(user => user ? callback(req, res, user) : res
                .status(401)
                .json({ "message": "User not found" }));
    } else {
        return res
            .status(401)
            .json({ "message": "User not login" });
    }
};

module.exports = { auth, generateToken, getAuthUser };
