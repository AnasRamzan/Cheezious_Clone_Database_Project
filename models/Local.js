const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let localSchema = new Schema({
    dealID : {
        type: String,
        required: true
    },
    dealName : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('local', localSchema);