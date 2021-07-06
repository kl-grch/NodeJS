const http = require('http');

http.get(process.argv[2], (response) => {
    let allData = '';
    let charactersNum = 0;
    response.on('data', function (data) {
        allData += data;
        charactersNum += String(data).length;
    })
    response.on('end', () => {
        console.log(charactersNum);
        console.log(allData);
    })
})