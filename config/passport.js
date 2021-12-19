// phương thức chứng thực là local 
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');
var bcrypt = require('bcryptjs');

module.exports = function(passport) {
     
    passport.use(new LocalStrategy(function(username, password, done) { //các tên - name trường cần nhập, đủ tên trường thì Done

        User.findOne({username: username}, function(err, user) { //kiểm tra giá trị trường có name là username hoặc tìm username có trong DB ko có
            if (err) console.log(err);

            if(!user) {
                return done(null, false, {message: 'No user found!'}); // chứng thực lỗi
            }

            bcrypt.compare(password, user.password, function(err, isMatch) {
                if(err) console.log(err);

                if(isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Wrong password.'}); // chứng thực lỗi
                }
            });
        });

    }));

    // Error: Failed to serialize user into session, chưa khai báo serialize
    // lỗi chưa thể format - mã hóa dữ liệu để có thể lưu trữ user vào session

    passport.serializeUser(function(user, done) {
        // mã hóa id
        done(null, user.id);
    });

    // có mã hóa thì phải có hàm giải mã định dạng

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            // console.log('OK')//is show in console
            done(err, user);
        });
    });

}