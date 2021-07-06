const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    let readStream = fs.createReadStream(process.argv[3]);

    readStream.on('open', () => {
        readStream.pipe(res);
    });

    readStream.on('error', function(err) {
        res.end(err);
    });

}).listen(process.argv[2])

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'content-type': 'text/plain' })

//   fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))