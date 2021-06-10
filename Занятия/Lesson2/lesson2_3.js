const http = require('http');

const server = http.createServer((req, res)=>{	
	let headers = req.headers;

	
	res.writeHead(200, {
		'Content-Type': 'text/plain'
	});
	
	res.write('Method: ' + req.method);
	res.write('HttpVersion: ' + req.httpVersion);
	res.end('End');
});

server.listen(8080, ()=>{
	console.log('Server run in 8080 port\n' +
		'http://localhost:8080');
});