const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let pastaSchema = new Schema({
    dealID : {
        type: String,
        required: true
    },
    dealName : {
        type: String,
        required: true
    },
    coldDrink : {
        type: String,
        required: true
    },
    spiceLevel : {
        type: String,
        required: true
    },
    price : {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('pasta', pastaSchema);