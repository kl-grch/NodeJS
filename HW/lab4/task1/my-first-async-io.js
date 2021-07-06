const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    let string = data.split('\n');
    console.log(string.length-1);
});