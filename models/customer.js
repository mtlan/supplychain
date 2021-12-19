// gọi thư viện mongose
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    customer_name:{
        type:String,
        required:true
    },
    customer_email:{
        type:String,
        required:true,
    },
    customer_phone:{
        type:String,
        required:true,
    },
    customer_address:{
        type:String,
        required:true,
    },
    customer_password:{
        type:String,
    },
    created_at:{
        type:Date,
    }
});

module.exports = mongoose.model("Customer", customerSchema);