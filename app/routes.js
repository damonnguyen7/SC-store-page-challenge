var express = require('express');
var router = express.Router();
var controller = require('./controller/mainController');

var landingPage = controller.landingPage;

//GET Request:
router.get('/', landingPage);

//Export router for server to use in middleware: 
module.exports = router;
