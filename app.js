var express = require("express");
var app = express();

app.get("/whoami", function(req, res) {
	res.json(
	{ 
	ip : req.connection.remoteAddress,
	language : req.headers["accept-language"].slice(0, req.headers["accept-language"].indexOf(",")),
	software : req.headers["user-agent"].slice(req.headers["user-agent"].indexOf("(")+1, req.headers["user-agent"].indexOf(")"))
	 });
});

app.listen(3000);