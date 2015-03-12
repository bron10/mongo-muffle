var express = require('express');
var app     = express();
var muffle  = require('../');

// Constant
var server = {
	PORT : process.env.PORT || 3000,
	IP   : process.env.IP || '127.0.0.1'
}

muffler = new muffle();

muffler.connect({
  uri : "mongodb://localhost:27017"
})

app.route('/')
	 .get(function(req,res){
	 	res.send('Hello Mongo!');
	 });

app.route('/new')
	 .get(function (req, res){
	 	new muffler.schema('car', {
	 		'color':'',
	 		'name' : [],
	 		'modelno' : 0,
	 		'features':{
	 			'seats' : 0,
	 			'abs' : false,
	 			'hoods': false,
	 			'engine':''
	 		}
	 	}).then(function(car){
	 		res.send(car);
	 	});
	 })
	
app.listen(server.PORT, function () {
  console.log('Example app listening at http://' + server.IP + ':' + server.PORT);
});