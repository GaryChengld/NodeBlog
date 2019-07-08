const mongoose = require('mongoose');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

userSchema.methods.setPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = createHash(password, this.salt);
};

userSchema.methods.validPassword = function (password) {
    const hash = createHash(password, this.salt);
    return this.hash === hash;
};

const createHash = (password, salt) => {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512')
        .toString('hex');
};

mongoose.model('User', userSchema);
