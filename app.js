// Gọi các phần phụ thuộc đã cài đặt
var express = require('express');  // Require module express vào project, //khai báo sử dụng module express
var path = require('path'); 
var bodyParser = require('body-parser');
require('dotenv').config();
var mongoose = require('mongoose');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var fileUpload = require('express-fileupload');


// set up mongoose
// mongoose.connect('mongodb://localhost:27017/supplychain', {useNewUrlParser: true, useUnifiedTopology: true}, function(err){
//   if(err){
//     console.log("Mongo connected error! " + err);
//   }else{
//     console.log("Mongo connected succeffully!");
//   }
// });

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, function(err){
  if(err){
      console.log("Mongo connected error! " + err);
  }else{
      console.log("Mongo connected succeffully!");
  }
});


// set up express app, set up dependencies
var app = express();  // Tạo một app mới

// Express fileUpload middleware
app.use(fileUpload());

// khai báo body-parser để lấy được dữ liệu từ form
// parse application/json
app.use(bodyParser.json());  // for parsing application/json
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));  // for parsing application/x-www-form-urlencoded
app.use(logger('dev'));

// app.set('views', path.join(__dirname, 'server/views/'));
app.set('view engine', 'ejs'); // Sử dụng ejs làm view engine, view engine có tác dụng là khi render file giao diện ko cần thêm đuôi ejs
app.set('views', 'views'); // Thư mục views nằm cùng cấp với file app.js

// Passport Middleware
app.use(passport.initialize()); //Dòng này để thông báo sử dụng passport nhé

// express session middleware
app.use(session({
    secret: 'keyboard cat',
    // resave: false,
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}));
app.use(passport.session());


// express validator middleware
var expressValidator = require('express-validator');
app.use(expressValidator({
  customValidators: {
    isImage: function(value, filename) {
      var extension = (path.extname(filename)).toLowerCase();
      switch(extension) {
        case '.jpg':
          return '.jpg';
        case '.jpeg':
          return '.jpeg';
        case '.png':
          return '.png';
        case '':
          return '.jpg';
        default:
          return false;
      }
    }
  }
}));

// set global errors variable
app.locals.errors = null;

// Get Page Model
var Page = require('./models/page');

// khi thêm page mới, ở trang home sẽ ko hiện ra phải run lại
// Get all pages to pass to header.ejs
Page.find({}).sort({sorting: 1}).exec(function(err, pages){
  if(err) {
    console.log(err);
  } else {
    // bên phải là pages của function
    app.locals.pages = pages;
  }
});

// Get Category Model
var Category = require('./models/category');

// Get all categories to pass to header.ejs
Category.find(function(err, categories){
  if(err) {
    console.log(err);
  } else {
    // bên phải là pages của function
    app.locals.categories = categories;
  }
});

// express message middleware
app.use(require('connect-flash')());
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);
  next();
});

// app.get là khai báo phương thức sử dụng là get
// dòng này sẽ hoạt động bất kì nơi đâu chứ kp phải trang giỏ hàng
app.get('*', function(req, res, next){
  res.locals.cart = req.session.cart;
  res.locals.user = req.user || null;
  next();
});

// Passport Config
require('./config/passport')(passport);

// app.set(express.static(path.join(__dirname, 'public')));
app.use(express.static("public"));
// app.use(express.static("public/frontend/js"));

app.use(express.static("public/test"));

// rút gọn đường dẫn đến web3
app.use("/scripts",express.static(__dirname+"/node_modules/web3.js-browser/build/"));

// set up port number
var port = 3000;  // Định nghĩa cổng để chạy ứng dụng NodeJS của bạn trên server, //Chọn cổng 3000 để chạy ứng dụng

// set up home route
// app.get('/', (request, respond) => {
// //   respond.status(200).json({
// //     message: 'Welcome to Project Support',
// //   });
//     respond.render("layout");
// });

// require('./controllers/main')(app);

// Require user route, gọi file chứa route
var adminPages = require('./controllers/admin_pages.js');
var adminCategories = require('./controllers/admin_categories.js');
var adminProducts = require('./controllers/admin_products.js');
var adminUsers = require('./controllers/admin_users.js');

var pages = require('./controllers/pages.js');
var products = require('./controllers/products.js');
var cart = require('./controllers/cart.js');
var users = require('./controllers/users.js');

// Dùng adminPages cho tất cả các route bắt đầu bằng '/admin/pages'
app.use('/admin/pages', adminPages);
app.use('/admin/categories', adminCategories);
app.use('/admin/products', adminProducts);
app.use('/admin/users', adminUsers);

app.use('/', pages);
app.use('/products', products);
app.use('/cart', cart);
app.use('/users', users);


app.listen(port, (request, respond) => {
  console.log(`Our server is live on ${port}. Yay!`);
});

//req chính là request, nơi chứa những request từ client gửi lên server
//res là response, là dữ liệu trả về cho client
