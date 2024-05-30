const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let orderSchema = new Schema({
    Customer : {
        type: String,
        required: true
    },
    Address : {
        type: String,
        required: true
    },
    Item_Ordered:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('order', orderSchema);