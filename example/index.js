var express = require('express')
var app = express()
var muffle = require('../')
muffler = new muffle();

muffler.connect({
  uri : "mongodb://localhost:27017"
})

app.get('/', function (req, res){
	res.send('Hello World!');
})
app.get('/new', function (req, res){
	new muffler.schema('car', {
	'color':'',
	'name' : [],
	'modelno' : 0,
	'features':{
		"seats" : 0,
		"abs" : false,
		"hoods": false,
		"engine":''
	}
	}).then(function(car){
		res.send(car);
	});
})
	
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port)
})