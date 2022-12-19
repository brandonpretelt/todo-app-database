const { model, Schema, mongoose } = require('mongoose');

const Category = new Schema({
    categoryTitle: String
});
module.exports = model('category', Category);
