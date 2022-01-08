var express = require('express');
var router = express.Router();

var auth = require('../config/auth');
var isAdmin = auth.isAdmin;

// GET product model
var Product = require('../models/product');

// GET user model
var User = require('../models/user');
// GET category model
var Category = require('../models/category');
// GET product model
var Product = require('../models/product');

var Page = require('../models/page');

// router.get('/demo',function(req, res){
//     res.send('ok');
// });

// Link run http://localhost:3000/admin/pages/dashboard
router.get("/dashboard", isAdmin, function(req, res){

    var count111;
    User.count(function(err, u){
        countu = u;
    });

    var countcat;
    Category.count(function(err, cat){
        countcat = cat;
    });

    var countpro;
    Product.count(function(err, pro){
        countpro = pro;
    });

    User.find(function(err, users){
        Category.find(function(err, cat){
            Product.find(function(err, pro){
                res.render('admin/dashboard', {
                    countu: countu,
                    countcat: countcat,
                    countpro: countpro
                });
            });
        });
    });

    // res.render("admin/dashboard", {
    //     count111: count111,
    //     countpro: countpro
    // });
})
// GET add page
router.get("/add-page", isAdmin, function(req, res){

    var title = "";
    var slug = "";
    var content = "";

    res.render('admin/add_page', {
        title: title,
        slug: slug,
        content: content
    });
});

// POST add page
router.post("/add-page", function(req, res){

    // validation
    req.checkBody('title', 'Title must have a value.').notEmpty();
    req.checkBody('content', 'Content must have a value.').notEmpty();

    var title = req.body.title;  //lấy giá trị của key title trong body parameters gửi lên
    var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    if(slug == "") slug = title.replace(/\s+/g, '-').toLowerCase();

    var content = req.body.content;

    var errors = req.validationErrors();

    if(errors){
        console.log('errors');
        res.render('admin/add_page', {
            errors: errors,
            title: title,
            slug: slug,
            content: content
        });
    }else{
        // console.log('success');
        // bên trái là slug collection trong database, bên phải biến slug khai báo ở trên
        Page.findOne({slug: slug}, function(err, page){
            if(page){
                req.flash('danger', 'Page slug exists, choose another.');
                res.render('admin/add_page', {
                    title: title,
                    slug: slug,
                    content: content
                });
            }else{
                var page = new Page({
                    title: title,
                    slug: slug,
                    content: content,
                    sorting: 100
                });

                page.save(function(err){
                    if(err) return console.log(err);

                    Page.find({}).sort({sorting: 1}).exec(function(err, pages){
                        if(err) {
                          console.log(err);
                        } else {
                          // bên phải là pages của function
                          req.app.locals.pages = pages;
                        }
                    });

                    req.flash('success', 'Page added!');
                    res.redirect('/admin/pages/pages');
                });
            }
        });
    }
});

// Lấy giá trị
router.get("/pages", isAdmin, function(req, res){
    Page.find({}).sort({sorting: 1}).exec(function(err, pages){
        res.render('admin/pages', {
            pages: pages
        });
    });
});

// Sort pages function
function sortPages(ids, callback) {
    var count = 0;
    for (var i = 0; i < ids.length; i++){
        var id = ids[i];
        count++;

        (function(count){

        Page.findById(id, function(err, page){
            page.sorting = count;
            page.save(function(err){
                if(err)
                    return console.log(err);
                ++count;
                if(count >= ids.length ) {
                    callback();
                }
            });
        });

    })(count);
    }
}

// POST reorder pages, sắp xếp
router.post("/reorder-pages", function(req, res){
    // console.log(req.body);
    var ids = req.body['id[]'];

    sortPages(ids, function(){

        Page.find({}).sort({sorting: 1}).exec(function(err, pages){
            if(err) {
              console.log(err);
            } else {
              // bên phải là pages của function
              req.app.locals.pages = pages;
            }
        });

    });
});

// fix: chuyển slug thành id vì lúc đầu khi edit /edit-page/test, nhưng nếu ko có giá trị thì /edit-page/, nên chuyển
//thành id /edit-page/213u912u391u38

// GET edit page
router.get("/edit-page/:id", isAdmin, function(req, res){

    Page.findById(req.params.id, function(err, page){
        if(err) return console.log(err);

        res.render('admin/edit_page', {
            title: page.title,
            slug: page.slug,
            content: page.content,
            id: page._id
        });
    });
    // res.render('admin/edit_page');

});

// POST edit page
router.post("/edit-page/:id", function(req, res){

    // validation
    req.checkBody('title', 'Title must have a value.').notEmpty();
    req.checkBody('content', 'Content must have a value.').notEmpty();

    var title = req.body.title;  //lấy giá trị của key title trong body parameters gửi lên
    var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
    if(slug == "") slug = title.replace(/\s+/g, '-').toLowerCase();
    var content = req.body.content;
    var id = req.params.id;

    var errors = req.validationErrors();

    if(errors){
        console.log('errors');
        res.render('admin/edit_page', {
            errors: errors,
            title: title,
            slug: slug,
            content: content,
            id: id
        });
    }else{
        // console.log('success');
        // bên trái là slug collection, bên phải slug chỗ if
        Page.findOne({slug: slug, _id:{'$ne':id}}, function(err, page){
            if(page){
                req.flash('danger', 'Page slug exists, choose another.');
                res.render('admin/edit_page', {
                    title: title,
                    slug: slug,
                    content: content,
                    id: id
                });
            }else{
                Page.findById(id, function(err, page){
                    if(err) return console.log(err);

                    page.title = title;
                    page.slug = slug;
                    page.content = content;

                    page.save(function(err){
                        if(err) return console.log(err);

                        // khi sửa 1 page thì refresh trang home thì page sẽ thay đổi, nếu ko có dòng này khi sửa page 
                        //thì trang home vẫn còn page cũ đó, phải run lại mới thấy nó thay đổi
                        Page.find({}).sort({sorting: 1}).exec(function(err, pages){
                            if(err) {
                              console.log(err);
                            } else {
                              // bên phải là pages của function
                              req.app.locals.pages = pages;
                            }
                        });
    
                        req.flash('success', 'Page added!');
                        res.redirect('/admin/pages/edit-page/' + id);
                    });
                });
            }
        });
    }
});

// GET delete page bị lỗi get thì reset lại vì dòng mới thêm vào nó ko hiểu
router.get("/delete-page/:id", isAdmin, function(req, res){
    Page.findByIdAndRemove(req.params.id, function(err){
        if(err) return console.log(err);

        // khi xóa 1 page thì refresh trang home thì page sẽ mất, nếu ko có dòng này khi xóa page thì trang home vẫn
        //còn page đó, phải run lại mới mất
        
        Page.find({}).sort({sorting: 1}).exec(function(err, pages){
            if(err) {
              console.log(err);
            } else {
              // bên phải là pages của function
              req.app.locals.pages = pages;
            }
        });

        req.flash('success', 'Page deleted!');
        res.redirect('/admin/pages/pages/');
    })
});

// Exports cho biến router
module.exports = router;
