var Connection = require('./connection');
var Schema = require('./schema');
	
function muffle(){
	
}
muffle.prototype.connect = Connection;
muffle.prototype.schema = Schema;

module.exports = muffle;
