var express = require('express');
var router = express.Router();
const ReportController = require('../controllers/reportController');
const uploadStorage = require('../middlewares/uploadMulterCloudinary')

router.get('/', ReportController.showList);
router.get('/addReport', ReportController.addReport);
router.post('/addReport', uploadStorage.single('foto'), ReportController.create);
router.get('/edit', ReportController.update);

module.exports = router;