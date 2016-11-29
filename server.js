var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var router = require('./app/routes');
var port = process.env.PORT || 3000;
var app = express();

//set up template engine
app.set('view engine', 'ejs');

//Middleware:
app.use(expressLayouts); //override the default response.render() behavior
app.use('/', router); 
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/public')));

//Boot up server
app.listen(port, function() {
  console.log('App listening on: ' + port);
});
