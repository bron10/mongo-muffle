var MongoClient   = require('mongodb').MongoClient
var EventEmitter  = require('events').EventEmitter;	
var util          = require('util');
var Q             = require('q'); 
module.exports    = connection;
util.inherits(connection, EventEmitter);

function connection(conn){
	var self = this;
	self.status = false;
	console.log("conn", conn);
	
	var deferred = Q.defer();
	MongoClient.connect(conn.uri, function(err, db) {	
		if(err){
			console.log("error", err);
			deferred.reject(new Error("Connection Error",err));
		}
		else{
			self.status = true;
			self.db = db;
			deferred.resolve(self.db);
		}
	});
	
	return deferred.promise;
}

connection.prototype.getCurrentStatus = function(){
	return this.status;
}

connection.prototype.disconnect = function(callback){
	this.status = false;
	console.log("wtf, :,", this);
	this.db.close(callback);
}