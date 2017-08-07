// Small sample server to mimick retrieving credentials from a database

var http = require('http');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

app.get('/credentials', function(req, res) {
	var credentials = {
		'awsAccessKeyId' : 'AKIAIG6IDQBED55KXAZA',
		'awsSecretKey' : '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'
	};
	res.json(credentials);
	res.end();
});


app.listen(port, function() {
	console.log("Listening on port: " + port);
});