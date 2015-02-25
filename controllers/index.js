var countriesData = require('../models/countries.json');


var indexController = {
	index: function(req, res) {
		res.render('index');
	},

  countriesbtn: function(req, res) {
    console.log(countriesData);
    res.send(countriesData);
  }
};

module.exports = indexController;