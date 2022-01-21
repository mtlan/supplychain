var mongoose = require('mongoose');

// Category Schema

var CategorySchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    slug: {
        type: String
    },
    image: {
        type: String,
    }
});

// export model tên Category, trên monggo thêm kí tự s vào
module.exports = mongoose.model('Category', CategorySchema);

// có model và lưu trữ thông tin, đi về cái route bên controller để gọi model đó