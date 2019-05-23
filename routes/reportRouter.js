var express = require('express');
var router = express.Router();
const ReportController = require('../controllers/reportController');
const uploadStorage = require('../helpers/uploadParser')

router.get('/', ReportController.showList);
router.get('/addReport', ReportController.addReport);
router.get('/edit', ReportController.update);

module.exports = router;