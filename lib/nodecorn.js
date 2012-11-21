// Module imports
var _fs = require("fs");
var _dgram = require("dgram");
var _protobuf = require("protobuf");
var _util = require("util");

// Severity constants
exports.CORN_EMERGENCY 	= 0;
exports.CORN_ALERT 		= 1;
exports.CORN_CRITICAL 	= 2;
exports.CORN_ERROR 		= 3;
exports.CORN_WARNING 	= 4;
exports.CORN_NOTICE 	= 5;
exports.CORN_INFO 		= 6;
exports.CORN_DEBUG 		= 7;

// Config
exports.cornHost 				= "127.0.0.1";
exports.cornPort 				= 9125;
exports.cornDefaultNode 		= "unspecified node";
exports.cornDefaultNodeRole 	= "unspecified role";
exports.cornDefaultNodeVersion 	= "unspecified version";
exports.cornDefaultSeverity 	= exports.CORN_DEBUG;
exports.cornPrintToConsole		= false;

// Init
var cornSocket = _dgram.createSocket("udp4");
var cornSchema = new _protobuf.Schema(_fs.readFileSync("popcorn.desc"));
var PopcornMessage = cornSchema["PopcornMessage"];

exports.cornLogTiny = function(message) {
	exports.cornLog(exports.cornDefaultSeverity, message);
};

exports.cornLog = function(severity, message) {
	exports.cornLogFull(exports.cornDefaultNode, exports.cornDefaultNodeRole, exports.cornDefaultNodeVersion, severity, message, "", "", "");
};

exports.cornLogFull = function(node, role, version, severity, message, module, funcname, line) {
	var newMessage = {
		"node": node,
		"nodeRole": role,
		"nodeVersion": version,
		"severity": severity,
		"message": message,
		"module": module,
		"function": funcname,
		"line": line,
		"pid": "" + process.pid
	};
	var bin = PopcornMessage.serialize(newMessage);
	cornSocket.send(bin, 0, bin.length, exports.cornPort, exports.cornHost);

	if (exports.cornPrintToConsole)
		_util.log(message);
};