var express = require('express');
var router = express.Router();

// Get Page model
var Page = require('../models/page');

var Product = require('../models/product');

/*
* GET /
*/
router.get('/', function(req, res){
    // res.render('home',{
    //     title: 'Home'
    // });
    Page.findOne({slug: 'home'}, function(err, page){
        if(err) console.log(err);

        Product.find(function(err, pro){
            if(err) console.log(err);
    
            res.render('home', {
                title: page.title,
                content: page.content,
                products: pro
            });
        });
        // res.render('home', {
        //     title: page.title,
        //     content: page.content
        // });
    });
});

/*
* GET a page
*/
router.get('/:slug', function(req, res){

    var slug = req.params.slug;

    Page.findOne({slug: slug}, function(err, page){
        if(err) console.log(err);

        if(!page) {
            res.redirect('/');
        } else {
            res.render('index2', {
                title: page.title,
                content: page.content
            });
        }
    });

});

router.get("/login", function(req, res){
    res.render("loginregister",{
        title: 'Home'
    });
});

router.get("/farmerlogin", function(req, res){
    res.render("farmerlogin");
});

router.get("/regulatorylogin", function(req, res){
    res.render("regulatorylogin");
});

router.get("/customerlogin", function(req, res){
    res.render("customerlogin");
});

router.get("/cropregistration", function(req, res){
    res.render("formdangki",{
        title: 'Home'
    });
});

router.get("/check", function(req, res){
    res.render("formgetvalue",{
        title: 'Check'
    });
});

router.get("/approve", function(req, res){
    res.render("formapprove",{
       title: 'Approve' 
    });
})

router.get("/track", function(req, res){
    res.render("track",{
       title: 'Track' 
    });
})

// Exports cho biến router
module.exports = router;

// module.exports = function(app){
//     // Pages user
//     app.get('/', function(req, res){
//         res.render('index2',{
//             title: 'Home'
//         });
//     });

//     app.get("/login", function(req, res){
//         res.render("loginregister",{
//             title: 'Home'
//         });
//     });

//     app.get("/farmerlogin", function(req, res){
//         res.render("farmerlogin");
//     });

//     app.get("/regulatorylogin", function(req, res){
//         res.render("regulatorylogin");
//     });

//     app.get("/customerlogin", function(req, res){
//         res.render("customerlogin");
//     });

//     app.get("/formdangki", function(req, res){
//         res.render("formdangki",{
//             title: 'Home'
//         });
//     });

//     app.get("/check", function(req, res){
//         res.render("formgetvalue",{
//             title: 'Check'
//         });
//     });

//     app.get("/approve", function(req, res){
//         res.render("formapprove",{
//            title: 'Approve' 
//         });
//     })

//     app.get("/track", function(req, res){
//         res.render("track",{
//            title: 'Track' 
//         });
//     })
//     // Pages Admin
//     app.get("/dashboard", function(req, res){
//         res.render("admin/dashboard");
//     })
//     // GET add page
//     app.get("/add-page", function(req, res){

//         var title = "";
//         var slug = "";
//         var content = "";

//         res.render('admin/add_page', {
//             title: title,
//             slug: slug,
//             content: content
//         });
//     });
//     // POST add page
//     app.post("/add-page", function(req, res){

//         // validation
//         req.checkBody('title', 'Title must have a value.').notEmpty();
//         req.checkBody('content', 'Content must have a value.').notEmpty();

//         var title = req.body.title;  //lấy giá trị của key title trong body parameters gửi lên
//         var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
//         if(slug == "") slug = title.replace(/\s+/g, '-').toLowerCase();
//         var content = req.body.content;

//         var errors = req.validationErrors();

//         if(errors){
//             console.log('errors');
//             res.render('admin/add_page', {
//                 errors: errors,
//                 title: title,
//                 slug: slug,
//                 content: content
//             });
//         }else{
//             // console.log('success');
//             // bên trái là slug collection, bên phải slug chỗ if
//             Page.findOne({slug: slug}, function(err, page){
//                 if(page){
//                     req.flash('danger', 'Page slug exists, choose another.');
//                     res.render('admin/add_page', {
//                         title: title,
//                         slug: slug,
//                         content: content
//                     });
//                 }else{
//                     var page = new Page({
//                         title: title,
//                         slug: slug,
//                         content: content,
//                         sorting: 100
//                     });

//                     page.save(function(err){
//                         if(err) return console.log(err);

//                         req.flash('success', 'Page added!');
//                         res.redirect('/pages');
//                     });
//                 }
//             });
//         }
//     });

//     // Lấy giá trị
//     app.get("/pages", function(req, res){
//         Page.find({}).sort({sorting: 1}).exec(function(err, pages){
//             res.render('admin/pages', {
//                 pages: pages
//             });
//         });
//     });

//     // POST reorder pages, sắp xếp
//     app.post("/reorder-pages", function(req, res){
//         // console.log(req.body);
//         var ids = req.body['id[]'];

//         var count = 0;
//         for (var i = 0; i < ids.length; i++){
//             var id = ids[i];
//             count++;

//             (function(count){

//             Page.findById(id, function(err, page){
//                 page.sorting = count;
//                 page.save(function(err){
//                     if(err)
//                         return console.log(err);
//                 });
//             });

//         })(count);
//         }
//     });

//     // GET edit page
//     app.get("/edit-page/:slug", function(req, res){

//         Page.findOne({slug: req.params.slug}, function(err, page){
//             if(err) return console.log(err);

//             res.render('admin/edit_page', {
//                 title: page.title,
//                 slug: page.slug,
//                 content: page.content,
//                 id: page._id
//             });
//         });
//         // res.render('admin/edit_page');

//     });
// }
