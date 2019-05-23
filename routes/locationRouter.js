var express = require('express');
var router = express.Router();
const LocationController = require('../controllers/locationController');

router.get('/addLocation', LocationController.addLocation);

module.exports = router;