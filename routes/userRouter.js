var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');

router.get('/register', UserController.register)
router.get('/login', UserController.getLogin)
module.exports = router;