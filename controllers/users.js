var express = require('express');
var router = express.Router();

var passport = require('passport');
var bcrypt = require('bcryptjs');

var auth = require('../config/auth');
var isFarmer = auth.isFarmer;
var isAuthority = auth.isAuthority;
var isUser = auth.isUser;

// Get User model
var User = require('../models/user');

// Link run http://localhost:3000/users/loginregister

/*
* GET loginregister
*/
router.get('/role', function(req, res){
    
    res.render('loginregister', {
        title: 'LoginRegister'
    });

});

/*
* GET customer login
*/
router.get('/customer/login', function(req, res){
    
    if(res.locals.user) res.redirect('/');

    res.render('customerlogin', {
        title: 'Customer Register'
    });

});

/*
* POST customer register
*/
router.post('/customer/register', function(req, res){
    
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    req.checkBody('name', 'Name is required!').notEmpty();
    req.checkBody('email', 'Email is required!').notEmpty();
    req.checkBody('username', 'Username is required!').notEmpty();
    req.checkBody('password', 'Password is required!').notEmpty();
    req.checkBody('password2', 'Password do not match').equals(password);

    var errors = req.validationErrors();

    // nếu lỗi trả về trang đăng kí
    if(errors) {
        res.render('customerlogin', {
            errors: errors,
            title: 'Customer Register',
            user: null
            // Nếu user is not defined
        }); 
    } else {
        // Kiểm tra username có trong database chưa, tránh trùng username đã đăng kí
        User.findOne({username: username}, function(err, user){
            if(err) console.log(err);

            if(user) {
                req.flash('danger', 'Customer username exists, choose another!');
                res.redirect('/users/customer/login');
            } else {
                // quy ước admin là 0, customer là 1, farmer là 2, regulatory là 3
                var user = new User({
                    name: name,
                    email: email,
                    username: username,
                    password: password,
                    admin: 1
                });

                bcrypt.genSalt(10, function(err, salt){
                    bcrypt.hash(user.password, salt, function(err, hash) {
                        if(err) console.log(err);

                        user.password = hash;

                        user.save(function(err) {
                            if(err) {
                                console.log(err);
                            } else {
                                req.flash('success', 'You are now registered!');
                                res.redirect('/users/customer/login');
                            }
                        });
                    });
                });
            }
        });
    }

});

/*
* GET login
*/
router.get('/login', function(req, res) {

   if(res.locals.user) res.redirect('/');

   res.render('login', {
        title: 'Log in'
   });

});

/*
* POST customer login
*/
router.post('/customer/login', function(req, res, next){

    // chọn phương thức check là local => npm install passport-local
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/customer/login', //nếu check không đúng thì redirect về link này
        // Hiển thị thông báo từ passport
        failureFlash: true,
    })(req, res, next);
});

/*
* GET farmer login
*/
router.get('/farmer/login', function(req, res){
    
    if(res.locals.user) res.redirect('/');

    res.render('farmerlogin', {
        title: 'Farmer Register'
    });

});

/*
* POST farmer register
*/
router.post('/farmer/register', function(req, res){
    
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;

    req.checkBody('name', 'Name is required!').notEmpty();
    req.checkBody('email', 'Email is required!').notEmpty();
    req.checkBody('username', 'Username is required!').notEmpty();
    req.checkBody('password', 'Password is required!').notEmpty();
    req.checkBody('password2', 'Password do not match').equals(password);

    var errors = req.validationErrors();

    // nếu lỗi trả về trang đăng kí
    if(errors) {
        res.render('farmerlogin', {
            errors: errors,
            title: 'Farmer Register',
            user: null
            // Nếu user is not defined
        }); 
    } else {
        // Kiểm tra username có trong database chưa, tránh trùng username đã đăng kí
        User.findOne({username: username}, function(err, user){
            if(err) console.log(err);

            if(user) {
                req.flash('danger', 'Farmer username exists, choose another!');
                res.redirect('/users/farmer/login');
            } else {
                // quy ước admin là 0, customer là 1, farmer là 2, regulatory là 3
                var user = new User({
                    name: name,
                    email: email,
                    username: username,
                    password: password,
                    admin: 2
                });

                bcrypt.genSalt(10, function(err, salt){
                    bcrypt.hash(user.password, salt, function(err, hash) {
                        if(err) console.log(err);

                        user.password = hash;

                        user.save(function(err) {
                            if(err) {
                                console.log(err);
                            } else {
                                req.flash('success', 'You are now registered!');
                                res.redirect('/users/farmer/login');
                            }
                        });
                    });
                });
            }
        });
    }

});

/*
* POST farmer login
*/
router.post('/farmer/login', function(req, res, next){

    // chọn phương thức check là local => npm install passport-local
    passport.authenticate('local', {
        successRedirect: '/users/farmer/',
        failureRedirect: '/users/farmer/login', //nếu check không đúng thì redirect về link này
        // Hiển thị thông báo từ passport
        failureFlash: true,
    })(req, res, next);
});

/*
* GET regulatory login
*/
router.get('/regulatory/login', function(req, res){
    
    if(res.locals.user) res.redirect('/users/regulatory/login');

    res.render('regulatorylogin', {
        title: 'Regulatory Register'
    });
});

/*
* POST regulatory login
*/
router.post('/regulatory/login', function(req, res, next){

    // chọn phương thức check là local => npm install passport-local
    passport.authenticate('local', {
        successRedirect: '/users/regulatory/',
        failureRedirect: '/users/regulatory/login', //nếu check không đúng thì redirect về link này
        // Hiển thị thông báo từ passport
        failureFlash: true,
    })(req, res, next);
});

/*
* GET logout
*/
router.get('/logout', function(req, res){
    
    req.logout();

    req.flash('success', 'You are logged out!');
    res.redirect('/users/role');

    res.render('loginregister', {
        title: 'LoginRegister'
    });

    // res.render('customerlogin', {
    //     title: 'Customer Register'
    // });

});

/*
* GET farmer
*/
router.get('/farmer/', isFarmer, function(req, res){
    
    res.render('farmer', {
        title: 'Farmer'
    });

});

/*
* GET crop registration
*/
router.get("/farmer/cropregistration", isFarmer, function(req, res){

    res.render("cropregistration",{
        title: 'Crop Registration'
    });
});

/*
* GET regulatory
*/
router.get('/regulatory/', isAuthority, function(req, res){
    
    res.render('regulatory', {
        title: 'Regulatory'
    });

});

/*
* GET quality testing
*/
router.get("/regulatory/qualitytesting", isAuthority, function(req, res){

    res.render("qualitytesting",{
        title: 'Quality Testing'
    });
});

/*
* GET approve
*/
router.get("/regulatory/approve", isAuthority, function(req, res){

    res.render("approve",{
        title: 'Approve'
    });
});

/*
* GET Produce Traceability
*/
router.get("/track", function(req, res){

    res.render("track",{
        title: 'Produce Traceability'
    });
});

/*
* GET micro finance as ETH
*/
router.get("/fund", function(req, res){

    res.render("fund",{
        title: 'Micro Finance'
    });
});

/*
* GET micro finance as USD
*/
router.get("/fundusd", function(req, res){

    res.render("fundUSD",{
        title: 'Micro Finance'
    });
});

// Exports cho biến router
module.exports = router;
