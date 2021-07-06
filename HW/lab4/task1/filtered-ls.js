const fs = require('fs');
fs.readdir (process.argv[2], (err, list) => {
    for(let file of list) {
        if(file.endsWith(`.${process.argv[3]}`))
            console.log(file);
    }
});