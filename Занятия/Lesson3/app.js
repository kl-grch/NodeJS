// const fs = require('fs');

// let text = fs.readFileSync('index.html', 'utf8');

// console.log(text);
// console.log('Finish');

const fs = require('fs');

fs.readFile('index.html', 'utf8', (err, text) =>{
    console.log(text);
});

console.log('Finish');