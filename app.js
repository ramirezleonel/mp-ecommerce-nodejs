var express = require('express');
var exphbs  = require('express-handlebars');
var pagarmp = require('./pagarmp');
const bodyParser = require('body-parser');
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/detail', function (req, res) {
    res.render('detail', req.query);
});


app.get('/success', function (req, res) {
    res.render('success', req.query);
});

app.get('/failure', function (req, res) {
    res.render('failure', req.query);
});

app.get('/pending', function (req, res) {
    res.render('pending', req.query);
});

app.post('/comprar', pagarmp);

app.use(express.static('assets'));
 

app.use('/assets', express.static(__dirname + '/assets'));
 
app.listen(process.env.PORT || 5000);

console.log('corriendo en el puerto 5000');