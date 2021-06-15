const { Server } = require('http');

const server = new Server();

server.on('request', (req, res)=>{
	res.setHeader('Content-Type', 'text/html')
	
	res.write('<h1 style="color:red">Hello</h1>');
	res.statusCode = 404;	
	res.end();
});

server.listen(3000, ()=>{
	console.log('Server run 3000 port');
	console.log(server.listening);
});

server.on('error', (err)=>{
	console.log(err);
});