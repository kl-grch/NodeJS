const http = require('http');
const fs = require('fs');
const { exit } = require('process');

const server = http.createServer((req, res)=>{	
    fs.readFile('./index.html', 'utf-8', (err, result)=>{
        if(err){
        console.log(err);
        res.statusCode = 500;
        return res.end();
    }

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.end(result);
    });

});

server.listen(8080, ()=>{
	console.log('Server run in 8080 port\n' +
		'http://localhost:8080');
});


process.on('uncaughtException', (err)=> {
    console.log(err);
    process.exit(1);
});

throw new Error('Test');
