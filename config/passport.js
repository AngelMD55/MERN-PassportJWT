const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require("../models/Users")
const secret = require("./secret")

module.exports = function (passport) {

    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = secret.secret;
    passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
        User.findOne({ email: jwt_payload.email }, function (err, user) {
            if (err) {
                console.log(err)
                return done(err, false);
            }
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        });
    }));
};