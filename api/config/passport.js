const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const usersService = require('../users/usersService');

passport.use(new LocalStrategy(
    { usernameField: 'email' },
    (username, password, done) => {
        usersService.authUser(username, password)
            .then((user) => done(null, user))
            .catch((err) => done(null, false, err));        
    }
));
