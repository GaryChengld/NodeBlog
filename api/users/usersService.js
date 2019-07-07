const mongoose = require('mongoose');
const User = mongoose.model('User');

const findUser = (email) => {
    console.log(`find user, email=${email}`);
    return User.findOne({ email: email });
};

const createUser = (userData) => {
    console.log('create a new user');
    console.log(userData);
    const user = new User();
    user.name = userData.name;
    user.email = userData.email;
    user.setPassword(userData.password);
    console.log(user);
    return User.create(user);
}

const authUser = (username, password) => {
    return findUser(username)
        .then((user) => {
            if (!user) {
                onError("Incorrect username.");
            }
            if (!user.validPassword(password)) {
                onError("Incorrect password.");
            } else {
                return user;
            }
        });
}

const onError = (message) => {
    throw {
        status: 401,
        message: message
    };
}

module.exports = {
    findUser, createUser, authUser
};
