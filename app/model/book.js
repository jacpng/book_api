var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
	title: String,
	author: String,
	year: Number,
	pages: Number,
	createdAt:{type:Date, default:Date.now},

})

module.exports = mongoose.model('Book',bookSchema)
