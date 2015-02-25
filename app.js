var express = require('express');


var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

// index
app.get('/', indexController.index);
app.get('/load-countries-btn', indexController.countriesbtn);

// send countries handle to server
// app.post('/load-countries-btn', indexController.countriesbtn);

//app.post('/load-countries-form', indexController.countriesform);

var server = app.listen(6473, function() {
	console.log('Express server listening on port ' + server.address().port);
});
