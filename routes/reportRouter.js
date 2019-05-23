var express = require('express');
var router = express.Router();
const ReportController = require('../controllers/reportController');

router.get('/addReport', ReportController.addReport);

module.exports = router;