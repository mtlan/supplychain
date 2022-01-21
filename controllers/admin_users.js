var express = require('express');
var router = express.Router();

var bcrypt = require('bcryptjs');

var auth = require('../config/auth');
var isAdmin = auth.isAdmin;

// GET user model
var User = require('../models/user');

// Link run http://localhost:3000/admin/users/

// GET users index
router.get("/", isAdmin, function(req, res){

    User.find(function(err, users){
        res.render('admin/users', {
            users: users,
        });
    });
})

// GET add user
router.get("/add-user", isAdmin, function(req, res){

    var name = "";
    var email = "";
    var username = "";
    var password = "";

    
    res.render('admin/add_user', {
        name: name,
        email: email,
        username: username,
        password: password
    });
    
});

// POST add user
router.post("/add-user", function(req, res){

    // validation
    req.checkBody('name', 'Name cannot be empty.').notEmpty();
    req.checkBody('email', 'Email cannot be empty.').notEmpty();
    req.checkBody('username', 'Username cannot be empty.').notEmpty();
    req.checkBody('password', 'Password cannot be empty.').notEmpty();

    var name = req.body.name;  //lấy giá trị của key title trong body parameters gửi lên, title name bên form
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var admin = req.body.admin;

    var errors = req.validationErrors();

    if(errors){
        console.log('errors');
        res.render('admin/add_user', {
            errors: errors,
            user: null,
        });
    }else{
        // console.log('success');
        // bên trái là slug collection, bên phải slug chỗ if
        User.findOne({username: username}, function(err, user){
            if(err) console.log(err);

            if(user){
                req.flash('danger', 'Username exists, please enter another name.');
                res.redirect('/admin/users/add-user');
            }else{
                var user = new User({
                   name: name,
                   email: email,
                   username: username,
                   password: password,
                   admin: admin,
                   created: Date.now()
                });
                
                bcrypt.genSalt(10, function(err, salt){
                    bcrypt.hash(user.password, salt, function(err, hash) {
                        if(err) console.log(err);

                        user.password = hash;

                        user.save(function(err) {
                            if(err) {
                                console.log(err);
                            } else {
                                req.flash('success', 'User added!');
                                res.redirect('/admin/users/add-user');
                            }
                        });
                    });
                });
                
            }
        });
    }
});

// GET delete user bị lỗi get thì reset lại vì dòng mới thêm vào nó ko hiểu
router.get("/delete-user/:id", isAdmin, function(req, res){
    var id = req.params.id;
    User.findByIdAndRemove(id, function(err){
        if(err) return console.log(err);

        req.flash('success', 'User deleted!');
        res.redirect('/admin/users');
    })
});

// Exports cho biến router
module.exports = router;
