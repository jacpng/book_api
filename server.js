var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://jacq png:123456@ds157631.mlab.com:57631/ada_class');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



var PORT = process.env.PORT || 8080;
var router = express.Router();

var bookController = require('./app/controllers/book.js')

var book = require('./app/model/book.js')

router.get('/',function(req,res){
	res.json({ message: 'Welcome to our bookstore!'})

});


router.route('/books')
.post(bookController.postBooks)
.get(bookController.getBooks)

router.route('/books/:book_id')
.get(bookController.findBook)
.post(bookController.updateBook)
.delete(bookController.deleteBook)


app.use('/',router)
app.listen(PORT,function(){
	console.log('server is listening' + PORT);


});

