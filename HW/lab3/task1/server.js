let http = require('http');
let fs = require('fs');

http.createServer((request, response) => {

    let file = 'error.html';
    let lang = '';
    if(process.env.LANG)
        lang = process.env.LANG.slice(0, 2);

    if (process.argv[2] === 'ru') {
        file = 'ru.html';
    } else if (process.argv[2] === 'en') {
        file = 'en.html';
    } else if ((lang === 'ru')) {
        file = 'ru.html';
    } else if ((lang === 'en')) {
        file = 'en.html';
    } else {
        console.log("No lang detected!");
        response.statusCode = 404;
        response.writeHead(404, {'Content-Type':'text/html'});
        response.end();
        return;
    }

    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            console.log("Error occurred!");
            response.statusCode = 404;
            response.writeHead(404, {'Content-Type':'text/html'});
        } else {
            console.log("File is sent!");
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data);
        }
        response.end();
    });

    console.log("Request accepted!");

}).listen(8080, () => {
    console.log("Server started at http://localhost:8080\n");
});