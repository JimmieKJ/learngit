'use strict'

var http = require('http');

var server = http.createServer(function (request,response){
	console.log(request.method + ':' + request.url);
	response.end('<h1>Hello</h1>')
});

server.listen(8084);
console.log('server is running at http://127.0.0.1:8084');