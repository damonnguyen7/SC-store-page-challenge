var express = require('express');
var router = express.Router();
var controller = require('./controller/mainController');

var landingPage = controller.landingPage;
var home = controller.home;
var store = controller.store;


//GET Request:
router.get('/', landingPage);
router.get('/#/home', home);
router.get('/#/store', store);

//Export router for server to use in middleware: 
module.exports = router;
