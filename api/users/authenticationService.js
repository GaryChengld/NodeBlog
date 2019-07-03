const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

const register = (name, email, password) => {
    const user = new User();
    user.name = name;
    user.email = email;
    user.setPassword(password);
    return User.create(user);
}

module.exports = {
    register
};
