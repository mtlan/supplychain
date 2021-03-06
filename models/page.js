var mongoose = require('mongoose');

// Page Schema

var PageSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    slug: {
        type: String
    },
    content: {
        type: String,
        require: true
    },
    sorting: {
        type: Number,
    },
});

module.exports = mongoose.model('Page', PageSchema);