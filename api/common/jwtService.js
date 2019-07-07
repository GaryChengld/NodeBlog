const httpJwt = require('express-jwt');
const jsonwebtoken = require('jsonwebtoken');

const auth = httpJwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
})

const generateToken = (user) => {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jsonwebtoken.sign({
        _id: user._id,
        email: user.email,
        name: user.name,
        exp: parseInt(expiry.getTime() / 1000, 10),
    }, process.env.JWT_SECRET);
};

module.exports = { auth, generateToken }