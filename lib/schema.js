//var mongoose = require('mongoose');
var MongoClient 	= require('mongodb').MongoClient
var EventEmitter 	= require('events').EventEmitter;	
var util 			= require('util');
var Q 				= require('q'); 
var cache  			= require('memory-cache');

module.exports = schema;
util.inherits(schema, EventEmitter);

function schema(key, schemaObject){
	var deferred = Q.defer();
	this.key = key;
	this.schemaObject = schemaObject;
	if(typeof key != "string"){
		deferred.reject(new Error("Invalid key!"));
	}
	else{
		this.set(key, schemaObject);
		console.log("this.get(key)", this.get(key))
		deferred.resolve(this.get(key));
	}
	return deferred.promise;
}

schema.prototype.set = function(key, value){
	return cache.put(key, value);
}
schema.prototype.get = function(key){
	return cache.get(key);
}
