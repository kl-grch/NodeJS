const http = require('http'); // подключение модуля
http.createServer((request, response) => { // вызов метода создания http сервера
console.log("HTTP works!");
response.writeHead(404, {'Content-Type':'text/html'});
response.write('<h1>We crashed</h1><img src="https://elit-web.ru/Media/files/filemanager/2019/404/image001.jpg">');
response.end();
}).listen(8080);
