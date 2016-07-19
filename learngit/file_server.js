'use strict'

var fs = require('fs');
var url = require('url');
var http = require('http');
var path = require('path');

var root = path.resolve(process.argv[2] || '.');

console.log('Static root dir: ' + root);

var server = http.createServer(function (request, response){
	var pathName = url.parse(request.url).pathname;
	var filepath = path.join(root, pathName);

	fs.stat(filepath, function(err, stats) {
		if(!err && stats.isFile()) {
			console.log('200 ' + request.url);
			response.writeHead(200);
			fs.createReadStream(filepath).pipe(response);
		}else{
			console.log('404 ' + request.url);

			response.writeHead(404);
			response.end('404 Not Found');
		}
	});
});

server.listen(8084);

console.log('Server is running at http:127.0.0.1:8084/');

