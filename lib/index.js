var Connection = require('./connection');
var Schema = require('./schema');
	
function muffle(){


}

module.exports = muffle;
muffle.prototype.connect = Connection;

muffle.prototype.schema = Schema;

