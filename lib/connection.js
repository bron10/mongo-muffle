//var mongoose = require('mongoose');
var MongoClient 	= require('mongodb').MongoClient
var EventEmitter 	= require('events').EventEmitter;	
var util 			= require('util');
var Q 				= require('q'); 
module.exports = connection;
util.inherits(connection, EventEmitter);

function connection(conn){
	var self = this;
	self.status = false;
	console.log("conn", conn);
	MongoClient.connect(conn.uri, function(err, db) {
	if(err != null){
		console.log("error", err);
	}
	else{
		self.status = true;
		self.db = db;
	}
	//db.close();
});	
}

connection.prototype.getCurrentStatus = function(){
	return this.status;
}
connection.prototype.disconnect = function(callback){
	this.status = false;
	console.log("wtf, :,", this);
	this.db.close(callback);
}