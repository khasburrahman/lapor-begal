var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const uploadMiddleware = require('../middlewares/uploadMulterCloudinary')

router.get('/register', UserController.displayForm)
router.post('/register', uploadMiddleware.single('foto'), UserController.register);
router.get('/login', UserController.getLogin)
router.post('/login', UserController.postLogin)
router.get('/logout', UserController.logout)

module.exports = router;