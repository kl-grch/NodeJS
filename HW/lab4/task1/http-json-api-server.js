const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    let reqUrl = url.parse(req.url, true);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    if(reqUrl.pathname === '/api/parsetime') {
        reqUrl = reqUrl.search;
        reqUrl = reqUrl.split('=')[1];
        let date = new Date(reqUrl);
        let obj = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        }
        res.write(JSON.stringify(obj));
    }
    if(reqUrl.pathname === '/api/unixtime') {
        reqUrl = reqUrl.search;
        reqUrl = reqUrl.split('=')[1];
        let date = new Date(reqUrl);
        let obj = {
            "unixtime":date.getTime()
        }
        res.write(JSON.stringify(obj));
    }
    res.end();

}).listen(process.argv[2])

// 'use strict'
// const http = require('http')

// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }

// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }

// const server = http.createServer(function (req, res) {
//   const parsedUrl = new URL(req.url, 'http://example.com')
//   const time = new Date(parsedUrl.searchParams.get('iso'))
//   let result

//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }

//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))