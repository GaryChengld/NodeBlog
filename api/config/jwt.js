const jwt = require('express-jwt');

const auth = jwt({
    secret: process.env.JWT_SECRET || "secret",
    userProperty: 'payload'
})

module.exports = { auth }