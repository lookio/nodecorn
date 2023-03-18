migrated: https://gitlab.com/l1905/maven-business/lookio-legacy/nodecorn

nodecorn
========

Node.js module for logging to a popcorn backend.


General Usage
=============
	var nodecorn = require("nodecorn");
	nodecorn.cornHost = "1.2.3.4";
	nodecorn.cornPort = 12345;
	nodecorn.cornDefaultNode = "server01";
	nodecorn.cornDefaultNodeRole = "the entire internet";
	nodecorn.cornDefaultNodeVersion = "1.0.0";
	nodecorn.cornPrintToConsole = true;

	nodecorn.cornLogTiny("This will log this message using all default values.");

	nodecorn.cornLog(nodecorn.CORN_EMERGENCY, "Or you can easily override the default severity.");

	nodecorn.cornLogFull = function(node, role, version, severity, message, module, funcname, line);



Severity Constants
==================
	CORN_EMERGENCY
	CORN_ALERT
	CORN_CRITICAL
	CORN_ERROR
	CORN_WARNING
	CORN_NOTICE
	CORN_INFO
	CORN_DEBUG
