const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let customerSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    town:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('customer', customerSchema);