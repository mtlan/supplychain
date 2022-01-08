var express = require('express');
var router = express.Router();

// var mkdirp = require('mkdirp');
var mkdir = require('mkdirp');
var fs = require('fs-extra');
var resizeImg = require('resize-img');

var auth = require('../config/auth');
var isAdmin = auth.isAdmin;

// GET product model
var Product = require('../models/product');
// GET category model
var Category = require('../models/category');

// Link run http://localhost:3000/admin/products/

// GET products index
router.get("/", isAdmin, function(req, res){

    var count;
    Product.count(function(err, c){
        count = c;
    });

    Product.find(function(err, products){
        res.render('admin/products', {
            products: products,
            count: count
        });
    });
})
// GET add product
router.get("/add-product", isAdmin, function(req, res){

    var title = "";
    var desc = "";
    var price = "";
    var weight = "";

    Category.find(function(err, cat){
        res.render('admin/add_product', {
            title: title,
            desc: desc,
            categories: cat,
            price: price,
            weight: weight
        });
    });
});

// POST add product
router.post("/add-product", function(req, res){

    if(!req.files){imageFile ="";}
    if(req.files){
        // biến name trong input là file
        var imageFile = typeof(req.files.image) !== "undefined " ? req.files.image.name : "";
    }
    // // check file not undefined, body parser not work file
    // var imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";

    // validation
    req.checkBody('title', 'The product name cannot be empty.').notEmpty();
    req.checkBody('desc', 'Product description cannot be empty.').notEmpty();
    req.checkBody('price', 'Product price cannot be empty.').isDecimal();
    req.checkBody('weight', 'Product weight cannot be empty.').notEmpty();
    // Kiểm tra file up lên có phải là đuôi .jpg, .jpeg, png
    req.checkBody('image', 'The uploaded image is not valid, please upload the correct image type').isImage(imageFile);

    var title = req.body.title;  //lấy giá trị của key title trong body parameters gửi lên, title name bên form
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    var desc = req.body.desc;
    var price = req.body.price;
    var weight = req.body.weight;
    var category = req.body.category;

    var errors = req.validationErrors();

    if(errors){
        console.log('errors');
        Category.find(function(err, cat){
            res.render('admin/add_product', {
                errors: errors,
                title: title,
                desc: desc,
                categories: cat,
                price: price,
                weight: weight
            });
        });
    }else{
        // console.log('success');
        // bên trái là slug collection, bên phải slug chỗ if
        Product.findOne({slug: slug}, function(err, product){
            if(product){
                req.flash('danger', 'The product name already exists, please enter another name.');
                Category.find(function(err, cat){
                    res.render('admin/add_product', {
                        title: title,
                        desc: desc,
                        categories: cat,
                        price: price,
                        weight: weight
                    });
                });
            }else{
                var price2 = parseFloat(price).toFixed(2);
                // var price2 = new Intl.NumberFormat('vi-VN', {
                //     style: 'currency',
                //     currency: 'VND',
                // });
                var product = new Product({
                    title: title,
                    slug: slug,
                    desc: desc,
                    price: price2,
                    weight: weight,
                    // price: price2.format(price),
                    category: category,
                    image: imageFile
                });

                product.save(function(err){
                    if(err) return console.log(err);
                    
                    // create folder
                    mkdir('public/backend/product_images/' + product._id,function(err){
                        return console.log(err);
                    });

                    // create folder con trong folder cha
                    mkdir('public/backend/product_images/' + product._id + '/gallery/',function(err){
                        return console.log(err);
                    });
                    // (***)
                    mkdir('public/backend/product_images/' + product._id + '/gallery/thumbs/',function(err){
                        return console.log(err);
                    });

                    if(imageFile != ""){
                        var productImage = req.files.image;
                        var path = 'public/backend/product_images/' + product._id + '/' + imageFile;

                        productImage.mv(path, function(err){
                           return console.log(err);
                        });
                    }

                    req.flash('success', 'Added product successfully!');
                    res.redirect('/admin/products');
                });
            }
        });
    }
});

// GET edit product
router.get("/edit-product/:id", isAdmin, function(req, res){

    var errors;

    if(req.session.errors) errors = req.session.errors;
    req.session.errors = null;

    Category.find(function(err, cat){

        Product.findById(req.params.id, function(err, p){
            if(err){
                console.log(err);
                res.redirect('/admin/products/');
            } else {
                // kiểm tra trong thư mục gallerty có file ảnh không, nếu ko gán files cho galleryImages (***)
                var galleryDir = 'public/backend/product_images/' + p._id + '/gallery/';
                var galleryImages = null;

                fs.readdir(galleryDir, function(err, files){
                    if (err){
                        console.log(err);
                    }else{
                        galleryImages = files;

                        res.render('admin/edit_product', {
                            title: p.title,
                            errors: errors,
                            desc: p.desc,
                            categories: cat,
                            category: p.category.replace(/\s+/g, '-').toLowerCase(),
                            price: parseFloat(p.price).toFixed(2),
                            weight: p.weight,
                            image: p.image,
                            galleryImages: galleryImages,
                            id: p._id
                        });
                    }
                });
            }
        });
    });
});

// POST edit product
router.post("/edit-product/:id", function(req, res){

    if(!req.files){imageFile ="";}
    if(req.files){
        var imageFile = typeof(req.files.image) !== "undefined " ? req.files.image.name : "";
    }
    // // check file not undefined, body parser not work file
    // var imageFile = typeof req.files.image !== "undefined" ? req.files.image.name : "";

    // validation
    req.checkBody('title', 'The product name cannot be empty.').notEmpty();
    req.checkBody('desc', 'Product description cannot be empty.').notEmpty();
    req.checkBody('price', 'Product price cannot be empty.').isDecimal();
    req.checkBody('price', 'Product weight cannot be empty.').notEmpty();
    // Kiểm tra file up lên có phải là đuôi .jpg, .jpeg, png
    req.checkBody('image', 'The uploaded image is not valid, please upload the correct image type').isImage(imageFile);

    var title = req.body.title;  //lấy giá trị của key title trong body parameters gửi lên, title name bên form
    var slug = title.replace(/\s+/g, '-').toLowerCase();
    var desc = req.body.desc;
    var price = req.body.price;
    var weight = req.body.weight;
    var category = req.body.category;
    var pimage = req.body.pimage;
    var id = req.params.id;

    var errors = req.validationErrors();

    if(errors) {
        req.session.errors = errors;
        res.redirect('/admin/products/edit-product/' + id);
    } else {
        Product.findOne({slug: slug, _id: {'$ne':id}}, function(err, p){
            if(err) console.log(err);

            if(p){
                req.flash('danger', 'The product name already exists, please enter another name.');
                res.redirect('/admin/products/edit-product/' + id);
            } else {
                Product.findById(id, function(err,p){
                    if(err) console.log(err);

                    p.title = title;
                    p.slug = slug;
                    p.desc = desc;
                    p.price = parseFloat(price).toFixed(2);
                    p.weight = weight;
                    p.category = category;
                    if(imageFile != "") {
                        p.image = imageFile;
                    }
                    p.save(function(err){
                        if(err) console.log(err);

                        if (imageFile != "") {
                            if (pimage != "") {
                                fs.remove('public/backend/product_images/' + id + '/' + pimage, function (err) {
                                    if (err)
                                        console.log(err);
                                });
                            }

                            var productImage = req.files.image;
                            var path = 'public/backend/product_images/' + id + '/' + imageFile;

                            productImage.mv(path, function (err) {
                                return console.log(err);
                            });

                        }
                        req.flash('success', 'Updated category successfully!');
                        res.redirect('/admin/products/edit-product/' + id);
                    });
                });
            }
        });
    }
});


// POST product gallery
router.post("/product-gallery/:id", function(req, res){

    // file bên input name file
    var productImage = req.files.file;
    var id = req.params.id;
    var path = 'public/backend/product_images/' + id + '/gallery/' + req.files.file.name;
    var thumbsPath = 'public/backend/product_images/' + id + '/gallery/thumbs/' + req.files.file.name;
    
    productImage.mv(path, function(err){
        if(err) console.log(err);

        resizeImg(fs.readFileSync(path),{width: 100, height: 100}).then(function(buf){
            fs.writeFileSync(thumbsPath, buf);
        });
    });

    res.sendStatus(200);
});

// GET delete image
router.get("/delete-image/:image", isAdmin, function(req, res){

    var originalImage = 'public/backend/product_images/' + req.query.id + '/gallery/' + req.params.image;
    var thumbImage = 'public/backend/product_images/' + req.query.id + '/gallery/thumbs/' + req.params.image;

    fs.remove(originalImage, function(err){
        if(err) {
            console.log(err);
        } else {
            fs.remove(thumbImage, function(err){
                if(err) {
                    console.log(err);
                } else {
                    req.flash('success', 'Deleted image successfully!')
                    res.redirect('/admin/products/edit-product/' + req.query.id);
                }
            });
        }


    });
});

// GET delete product bị lỗi get thì reset lại vì dòng mới thêm vào nó ko hiểu
router.get("/delete-product/:id", isAdmin, function(req, res){
    var id = req.params.id;
    var path = 'public/product_images/' + id;
    fs.remove(path, function(err){
        if(err) {
            console.log(err);
        } else {
            Product.findByIdAndRemove(req.params.id, function(err){
                if(err) return console.log(err);
            });
            req.flash('success', 'Deleted image successfully!');
            res.redirect('/admin/products');
        }
    });
});

// Exports cho biến router
module.exports = router;
