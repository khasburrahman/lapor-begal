var express = require('express');
var router = express.Router();
const ReportController = require('../controllers/reportController');

router.get('/', ReportController.showList);
router.get('/addReport', ReportController.addReport);
router.post('/addReport', ReportController.create);
router.get('/:id/edit', ReportController.formUpdate);
router.post('/:id/edit', ReportController.update);
router.post('/:id/delete', ReportController.delete);

module.exports = router;

