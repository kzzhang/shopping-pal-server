http = require('http');
fs = require('fs');
var url = require('url');

var server = http.createServer(function(request, response) {
	if (request.method == 'GET') {
		response.writeHead(200, {'Content-Type':'application/json'});
		var result = {'status':'Success'};
		response.write(JSON.stringify(result));
	} else {
		response.writeHead(404);
		var err = {'status':'Method not supported'};
		response.write(JSON.stringify(err));
	}
	response.end();
});

server.listen(8080);