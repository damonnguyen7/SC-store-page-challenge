//Require express
var express = require('express');
var port = process.env.PORT || 3000;
//Create express app
var app = express();
//Boot up server
app.listen(port, function() {
  console.log('App listening on: ' + port);
});
