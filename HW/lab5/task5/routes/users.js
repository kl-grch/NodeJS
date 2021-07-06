let express = require('express');
let router = express.Router();

router.post('/', (req, res, next) => {
    let dataArray = req.body.name;
    for (let chunk of dataArray)
        console.log('Параметры POST запроса: ' + chunk);
    res.render('index', {
        login: dataArray[0],
        email: dataArray[1],
        password: dataArray[2]
    });
});

module.exports = router;