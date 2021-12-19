var express = require('express');
var router = express.Router();

var mkdir = require('mkdirp');
var fs = require('fs-extra');
var resizeImg = require('resize-img');

var auth = require('../config/auth');
var isAdmin = auth.isAdmin;

// GET category model
var Category = require('../models/category');

// Link run http://localhost:3000/admin/categories/

// GET category index
router.get("/", isAdmin, function(req, res){
    Category.find(function(err, categories){
        if(err) return console.log(err);
        res.render('admin/categories',{
            // categories of function = categories bên phải
            categories: categories
        });
    });
    // res.send('category');
})
// GET add category
router.get("/add-category", isAdmin, function(req, res){

    var title = "";

    res.render('admin/add_category', {
        title: title,
    });
});

// POST add category
router.post("/add-category", function(req, res){

    if(!req.files){imageFile ="";}
    if(req.files){
        var imageFile = typeof(req.files.image) !== "undefined " ? req.files.image.name : "";
    }

    // validation
    req.checkBody('title', 'The category cannot be empty.').notEmpty();
    // Kiểm tra file up lên có phải là đuôi .jpg, .jpeg, png
    req.checkBody('image', 'Invalid image upload, please upload correct image type').isImage(imageFile);

    var title = req.body.title;  //lấy giá trị của key title trong body parameters gửi lên, title name bên form
    var slug = title.replace(/\s+/g, '-').toLowerCase();

    var errors = req.validationErrors();

    if(errors){
        console.log('errors');
        res.render('admin/add_category', {
            errors: errors,
            title: title,
        });
    }else{
        // console.log('success');
        // bên trái là slug collection, bên phải slug chỗ if
        Category.findOne({slug: slug}, function(err, category){
            if(category){
                req.flash('danger', 'The category name already exists, enter another name.');
                res.render('admin/add_category', {
                    title: title,
                });
            }else{
                var category = new Category({
                    title: title,
                    slug: slug,
                    image: imageFile
                });

                category.save(function(err){
                    if(err) return console.log(err);

                    // create folder
                    mkdir('public/backend/category_images/' + category._id,function(err){
                        return console.log(err);
                    });

                    if(imageFile != ""){
                        var categoryImage = req.files.image;
                        var path = 'public/backend/category_images/' + category._id + '/' + imageFile;

                        categoryImage.mv(path, function(err){
                           return console.log(err);
                        });
                    }

                    Category.find(function(err, categories){
                        if(err) {
                          console.log(err);
                        } else {
                          // bên phải là pages của function
                          req.app.locals.categories = categories;
                        }
                    });

                    req.flash('success', 'Added category successfully!');
                    res.redirect('/admin/categories/');
                });
            }
        });
    }
});

// GET edit category
router.get("/edit-category/:id", isAdmin, function(req, res){

    Category.findById(req.params.id, function(err, category){
        if(err) return console.log(err);

        res.render('admin/edit_category', {
            title: category.title,
            slug: category.slug,
            id: category._id,
            image: category.image,
        });
    });
});

// POST edit category
router.post("/edit-category/:id", function(req, res){

    if(!req.files){imageFile ="";}
    if(req.files){
        var imageFile = typeof(req.files.image) !== "undefined " ? req.files.image.name : "";
    }

    // validation
    req.checkBody('title', 'The category cannot be empty..').notEmpty();
   
    var title = req.body.title;  //lấy giá trị của key title trong body parameters gửi lên
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    
    var pimage = req.body.pimage;
    var id = req.params.id;
    

    var errors = req.validationErrors();

    if(errors){
        console.log('errors');
        res.render('admin/edit_category', {
            errors: errors,
            title: title,
            id: id
        });
    }else{
        // console.log('success');
        // bên trái là slug collection, bên phải slug chỗ if
        Category.findOne({slug: slug, _id:{'$ne':id}}, function(err, category){
            if(category){
                req.flash('danger', 'The category name already exists, enter another name.');
                res.render('admin/edit_category', {
                    title: title,
                    id: id
                });
            }else{
                Category.findById(id, function(err, category){
                    if(err) return console.log(err);

                    category.title = title;
                    category.slug = slug;
                    if(imageFile != "") {
                        category.image = imageFile;
                    }

                    category.save(function(err){
                        if(err) return console.log(err);

                        if (imageFile != "") {
                            if (pimage != "") {
                                fs.remove('public/backend/category_images/' + id + '/' + pimage, function (err) {
                                    if (err)
                                        console.log(err);
                                });
                            }

                            var categoryImage = req.files.image;
                            var path = 'public/backend/category_images/' + id + '/' + imageFile;

                            categoryImage.mv(path, function (err) {
                                return console.log(err);
                            });

                        }

                        Category.find(function(err, categories){
                            if(err) {
                              console.log(err);
                            } else {
                              // bên phải là pages của function
                              req.app.locals.categories = categories;
                            }
                        });
    
                        req.flash('success', 'Updated category successfully');
                        res.redirect('/admin/categories/edit-category/' + id);
                    });
                });
            }
        });
    }
});

// GET delete page bị lỗi get thì reset lại vì dòng mới thêm vào nó ko hiểu
router.get("/delete-category/:id", isAdmin, function(req, res){
    var id = req.params.id;
    var path = 'public/backend/category_images/' + id;

    fs.remove(path, function(err){
        if(err) {
            console.log(err);
        } else {
            Category.findByIdAndRemove(req.params.id, function(err){
                if(err) return console.log(err);
        
                // dòng này khi bên admin cập nhật danh mục tức thời thì trang home sẽ thay đổi
                Category.find(function(err, categories){
                    if(err) {
                      console.log(err);
                    } else {
                      // bên phải là pages của function
                      req.app.locals.categories = categories;
                    }
                  });
        
                req.flash('success', 'Deleted category successfully');
                res.redirect('/admin/categories/');
            })
        }
    });
});

// Exports cho biến router
module.exports = router;
