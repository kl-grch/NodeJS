const http = require('http');

let dataArr = {};
let totalData = 0

for (let i = 2; i < 5; i++) {
    http.get(process.argv[i], (response) => {
        let allData = '';
        response.on('data', function (data) {
            allData += data;
            if(!dataArr.hasOwnProperty(i))
                dataArr[i] = [];
        })
        response.on('end', () => {
            dataArr[i] = allData;
            totalData++;
            if(totalData === 3) {
                for(let j in dataArr)
                    console.log(dataArr[j]);
            }
        })
    })
}