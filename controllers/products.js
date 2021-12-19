var express = require('express');
var router = express.Router();
var fs = require('fs-extra');

var auth = require('../config/auth');
var isUser = auth.isUser;

// Get Product model
var Product = require('../models/product');

// Get Category model
var Category = require('../models/category');

/*
* GET all products
*/
router.get('/products', function(req, res){
// router.get('/products', isUser, function(req, res){
    
    Product.find(function(err, pro){
        if(err) console.log(err);

        res.render('all_products', {
            title: 'Products',
            products: pro
        });
    });
});

/*
* GET all products by category
*/
router.get('/:category', function(req, res){

    var categorySlug = req.params.category;

    Category.findOne({slug: categorySlug}, function(err, c){

        Product.find({category: categorySlug}, function(err, pro){
            if(err) console.log(err);
            res.render('cat_products', {
                title: c.title,
                products: pro
            });
        });
    });
});

/*
* GET products details
*/
router.get('/:category/:product', function(req, res){

    var galleryImages = null;
    var loggedIn = (req.isAuthenticated()) ? true : false;

    Product.findOne({slug: req.params.product}, function(err, pro){
        if(err) {
            console.log(err);
        } else {
            var galleryDir = 'public/backend/product_images/' + pro._id  + '/gallery/';

            fs.readdir(galleryDir, function(err, files){
                if(err) {
                    console.log(err);
                } else {
                    galleryImages = files;

                    res.render('product_detail', {
                        title: pro.title,
                        p: pro,
                        galleryImages: galleryImages,
                        loggedIn: loggedIn
                    });
                }
            });
        }
        
    });
});

// Exports cho biến router
module.exports = router;