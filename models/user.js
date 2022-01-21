var mongoose = require('mongoose');

// khai báo cấu trúc database sẽ lưu trữ
// User Schema
var UserSchema = mongoose.Schema({
    
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    admin: {
        type: Number,
    },
    created: {
        type: Date
    },
});

module.exports = mongoose.model('User', UserSchema);