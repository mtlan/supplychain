// gọi thư viện mongose
const mongoose = require("mongoose");

const finanSchema = new mongoose.Schema({
    farmer_id:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true,
    },
    investment:{
        type:Boolean,
    },
    wallet:{
        type:String,
    },
    created_at:{
        type:Date,
    }
});

module.exports = mongoose.model("Finan", finanSchema);