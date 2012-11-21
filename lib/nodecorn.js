var _fs = require("fs");
var _dgram = require("dgram");
var _protobuf = require("protobuf");

var cornDefaultNode = "unspecified node";
var cornDefaultNodeRole = "unspecified role";
var cornDefaultNodeVersion = "unspecified version";

exports.CORN_EMERGENCY 	= 0;
exports.CORN_ALERT 		= 1;
exports.CORN_CRITICAL 	= 2;
exports.CORN_ERROR 		= 3;
exports.CORN_WARNING 	= 4;
exports.CORN_NOTICE 	= 5;
exports.CORN_INFO 		= 6;
exports.CORN_DEBUG 		= 7;

//exports.cornLog = function(severity, message)

exports.cornTest = function() {
	
};