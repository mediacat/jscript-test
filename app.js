var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var staticroutes = require('./controllers/routes/static');
var apiroutes = require('./controllers/routes/api');

var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// Datastorage Setup
// Connect and setup schemas
var schemas = require('./models/models');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Routes
app.use("/static_content", express.static(path.join(__dirname, '/static_content')));

app.use('/',staticroutes);
app.use('/results', apiroutes);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');








module.exports = app;
