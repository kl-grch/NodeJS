let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let route = require('./routes/users.js');
let mustacheExpress = require('mustache-express');

app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.listen(8080, () => {console.log('http://localhost:8080/')});

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static('public'));

app.use('/somepath', route);