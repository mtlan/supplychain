var LocalStrategy = require('passport-local').Strategy;
var Farmer = require('../models/farmer');
var bcrypt = require('bcryptjs');

module.exports = function(passport){
    passport.use(new LocalStrategy(function (username, password, done){
        Farmer.findOne({username:username}, function(err, user){
            if(err) console.log(err);

            if(!user) {
                return done(null, false, {message: 'No user found!'});
            }

            bcrypt.compare(passwoed, user.password, function(err, isMatch){
                if(err) console.log(err);

                if(isMatch) {
                    return done(null, user);
                }else {
                    return done(null, false, {message: 'Wrong password.'});
                }
            });
        })
    }));

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });
}
