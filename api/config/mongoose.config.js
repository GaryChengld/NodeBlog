const mongoose = require('mongoose');
const host = process.env.DB_HOST || 'localhost'
const username = process.env.DB_USERNAME || 'admin';
const password = process.env.DB_PASSWORD || 'manager';
const database = process.env.DB_DATABASE || 'myDB';
const authSource = process.env.DB_AUTO_SOURCE || 'admin';

const dbURL = `mongodb://${username}:${password}@${host}/${database}`;
const connectOption = {
    useNewUrlParser: true,
    useCreateIndex: true,
    auth: { authSource: `${authSource}` }
};
const readLine = require('readline');

const connect = () => {
    setTimeout(() => mongoose.connect(dbURL, connectOption), 1000);
}

mongoose.connection.on('connected', () => {
    console.log('connected');
});

mongoose.connection.on('error', err => {
    console.log('error: ' + err);
    return connect();
});

mongoose.connection.on('disconnected', () => {
    console.log('disconnected');
});

if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    });
}

const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
        callback();
    });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

connect();

require("../posts/post.schema");