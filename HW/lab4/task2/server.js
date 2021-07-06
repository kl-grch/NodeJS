let http = require('http');
let fs = require('fs');
let path = require('path'); 

let mimeTypes = {
    '.html':'text/html',
    '.mp4':'video/mp4',
    '.mp3':'audio/mpeg'
};

http.createServer((request, response) => {
    let pathname, extname, mimeType;

    console.log("Request: " + request.url);
    console.log("Request: " + request.headers.range);

    if(request.url === '/')
        pathname = 'site/index.html';
    else
        pathname = 'site'+request.url;
    extname = path.extname(pathname);
    mimeType = mimeTypes[extname];

    if (!fs.existsSync(pathname)) {
        console.log('Could not find or open file for reading\n');
        response.statusCode = 404;
        response.end();
        return null;
    }

    let responseHeaders = {};

    let stat = fs.statSync(pathname);

    let rangeRequest = readRangeHeader(request.headers['range'], stat.size); 

    if (rangeRequest == null) {

    responseHeaders['Content-Type'] = mimeType;
    responseHeaders['Content-Length'] = stat.size; 
    responseHeaders['Accept-Ranges'] = 'bytes'; 

    let video = fs.readFileSync(pathname);
    console.log(`The file ${pathname} is read and sent to the client\n`);
    response.writeHead(200, responseHeaders);
    response.end(video);
    return null;
    }

    let start = rangeRequest.start;
    let end = rangeRequest.end;

    if (start >= stat.size || end >= stat.size) {
    responseHeaders['Content-Range'] = 'bytes */' + stat.size; 
    console.log("Return the 416 'Requested Range Not Satisfiable'");
    response.writeHead(416, responseHeaders);
    response.end();
    return null;
    }

    let maxsize = 10240;

    if (end - start >= maxsize){

    end = start + maxsize - 1;
    }

    responseHeaders['Content-Range'] = 'bytes ' + start + '-' + end + '/' + stat.size;
    responseHeaders['Content-Length'] = start == end ? 0 : (end - start + 1);
    responseHeaders['Content-Type'] = mimeType;
    responseHeaders['Accept-Ranges'] = 'bytes'; 

    responseHeaders['Cache-Control'] = 'no-cache'; 

    const fd = fs.openSync(pathname, 'r'); 

    let buf = Buffer.alloc(responseHeaders['Content-Length']);

    fs.read(fd, buf, 0, buf.length, start, (err, bytes) => {
    if(err){
        console.log(err);
        response.statusCode = 500;
        response.end();
    } else {
        response.writeHead(206, responseHeaders);
        response.end(buf);
    }
});
   
function readRangeHeader(range, totalLength) {

        if (range == null || range.length == 0)
        return null;

        let array = range.split(/bytes=([0-9]*)-([0-9]*)/);

        let startRange = parseInt(array[1]);
        let endRange = parseInt(array[2]);
        
        let result = {
            start: isNaN(startRange) ? 0 : startRange,
            end: isNaN(endRange) ? (totalLength - 1) : endRange
        };

        if (isNaN(startRange) && !isNaN(endRange)) {
            result.start = totalLength - endRange;
            result.end = totalLength - 1;
        }
            return result;
        }

}).listen(8080, () => {
    console.log("HTTP server works in 8080 port!\n");
});