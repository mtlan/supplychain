const Customer = require('../models/customer');
const Farmer = require('../models/farmer');
const Fina = require('../models/finan');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'nsdfksndlsdfjwdnlsedjw9r39erdfewlfknslfneslf39'

module.exports = function(app){
    app.get("/", function(req, res){
        res.render("index");
    });

    app.get("/login", function(req, res){
        res.render("loginregister");
    });

    app.get("/farmerlogin", function(req, res){
        res.render("farmerlogin");
    });

    app.get("/regulatorylogin", function(req, res){
        res.render("regulatorylogin");
    });

    app.get("/customerlogin", function(req, res){
        res.render("customerlogin");
    });

    app.post("/dangki", function(req,res){
        if(!req.body.farmer_name || !req.body.farmer_email || !req.body.farmer_password){
            res.json({ketqua:0, maloi:"Thiếu tham số kìa bạn ơi!"});
        }else{
            var farmerNew = new Farmer({
                farmer_name:req.body.farmer_name,
                farmer_email:req.body.farmer_email,
                farmer_password:req.body.farmer_password,
                created_at:Date.now()
            });
            farmerNew.save(function(err){
                if(err){
                    res.json({ketqua:0, maloi:"Mongodb save error!"});
                }else{
                    res.json({ketqua:1, maloi:farmerNew});
                }
            });
        }
    });

    app.post('/api/register', async (req, res) => {
        console.log(req.body);

        const {farmer_name, farmer_email, farmer_password: plainTextPassword} = req.body;

        // validate
        if(!farmer_name || typeof farmer_name !== 'string') {
            return res.json({status: 'error', error: 'Invalid username'});
        }

        if(!farmer_email || typeof farmer_email !== 'string') {
            return res.json({status: 'error', error: 'Invalid email'});
        }

        if(!plainTextPassword || typeof plainTextPassword !== 'string') {
            return res.json({status: 'error', error: 'Invalid password'});
        }

        if(plainTextPassword.length < 5) {
            return res.json({status: 'error', error: 'Password too small. Should be at least 6 characters'});
        }

        const farmer_password = await bcrypt.hash(plainTextPassword, 10);
        // mã hóa password, 10 tạo chuỗi ngẫu nhiên radom 10 lần
        // console.log(await bcrypt.hash(password, 10))
        try {
            const response =  await Farmer.create({
                farmer_name,
                farmer_email,
                farmer_password,
                created_at:Date.now()
            });
            console.log('Farmer created successfully: ', response);
        } catch (error) {
            // lấy ra thông tin của cái lỗi đó, có quá nhiều lỗi ko thể xác định được
            console.log(error.message);
            return res.json({status: 'error'});
        }

        res.json({status: 'ok'});
    });
    
    app.get("/finance",function(req, res){
        res.render("finance");
    });

    app.post('/api/login', async (req, res) => {

        const {farmer_email, farmer_password} = req.body;

        const farmer = await Farmer.findOne({farmer_email}).lean();

        if(!farmer) {
            return res.json({status: 'error', error: 'Invalid username/password'});
        }

        if(await bcrypt.compare(farmer_password, farmer.farmer_password)) {
            // the username, password combination is successful

            const token = jwt.sign(
                {
                    id: farmer._id, 
                    farmer_email: farmer.farmer_email
                }, JWT_SECRET);
            
            
            return res.json({status: 'ok', data: token});
            //  res.json('/finance');
        }
        res.redirect('/finance');

        res.json({status: 'error', error: 'Invalid username/password'});
    });

    app.post('/api/change-password', (req, res) => {
        const {token} = req.body;
        const farmer = jwt.verify(token, JWT_SECRET);

        console.log(farmer);
        res.json({status: 'ok'});

    });

    app.post("/dangnhap", function(req, res){
        let {farmer_email, farmer_password} = req.body;
        farmer_email = farmer_email.trim();
        farmer_password = farmer_password.trim();

        if(farmer_email == "" || farmer_password == ""){
            // res.json({
            //     ketqua:0,
            //     maloi:"Empty"
            // })
            alert("Thiếu tham số");
        }else{
            Farmer.find({farmer_email}).then(data => {
                if(data) {
                    var passworddb = data[0].farmer_password;
                    if (farmer_password==passworddb){
                        // res.json({
                        //     ketqua:1,
                        //     maloi:"success"
                        // })
                        res.redirect('/finance');
                    }else{
                        res.json({
                            ketqua:0,
                            maloi:"failure"
                        })
                    }
                }
            });
        }
    });

    // app.get("/", function(req, res){
    //     res.render("layout");
    // });

    // app.post("/register", function(req, res){
    //     if(!req.body.customer_name || !req.body.customer_email){
    //         res.json({ketqua:0, maloi:"Thiếu tham số kìa bạn ơi!"});
    //     }else{
    //         var customerNew = new Customer({
    //             customer_name:req.body.customer_name,
    //             customer_email:req.body.customer_email,
    //             customer_password:req.body.customer_password,
    //             customer_phone:req.body.customer_phone,
    //             customer_address:req.body.customer_address,
    //             created_at:Date.now()
    //         });
    //         customerNew.save(function(err){
    //             if(err){
    //                 res.json({ketqua:0, maloi:"Mongodb save error!"});
    //             }else{
    //                 res.json({ketqua:1, maloi:customerNew});
    //             }
    //         });
    //     }
    // });

    // app.get("/login", function(req, res){
    //     res.render("pagelogin");
    // })

    app.post("/dangnhap", function(req, res){
        let {customer_email, customer_password} = req.body;
        customer_email = customer_email.trim();
        customer_password = customer_password.trim();

        if(customer_email == "" || customer_password == ""){
            res.json({
                ketqua:0,
                maloi:"Empty"
            })
        }else{
            Customer.find({customer_email}).then(data => {
                if(data) {
                    var passworddb = data[0].customer_password;
                    if (customer_password==passworddb){
                        // res.json({
                        //     ketqua:1,
                        //     maloi:"success"
                        // })
                        res.redirect('/finance');
                    }else{
                        res.json({
                            ketqua:0,
                            maloi:"failure"
                        })
                    }
                }
            });
        }
    });

    app.post("/investment", function(req, res){
        if(!req.body.famer_id || !req.body.value){
            res.json({ketqua:0, maloi:"Thiếu tham số kìa bạn ơi!"});
        }else{
            var FinaNew = new Fina({
                farmer_id:req.body.famer_id,
                value:req.body.value,
                investment: false,
                wallet: "",
                created_at:Date.now()
            });
            FinaNew.save(function(err){
                if(err){
                    res.json({ketqua:0, maloi:"Mongodb save error!"});
                }else{
                    res.json({ketqua:1, maloi:FinaNew});
                }
            });
        }
    });

}