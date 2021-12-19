// gọi thư viện mongose
const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
    farmer_name:{
        type:String,
        required:true,
        // unique: true
    },
    farmer_email:{
        type:String,
        required:true,
        // unique: true
    },
    farmer_password:{
        type:String,
        required:true,
    },
    created_at:{
        type:Date,
    }
});

module.exports = mongoose.model("Farmer", farmerSchema);