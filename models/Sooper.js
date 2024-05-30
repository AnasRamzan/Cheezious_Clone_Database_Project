const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let sooperSchema = new Schema({
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

module.exports = mongoose.model('sooper', sooperSchema);