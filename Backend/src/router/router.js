const router = require('express').Router();
const rescue = require('express-rescue');
const controller = require('../controllers/controllerLogin');
const { LoginValidation } = require('../middleware/loginMidlleware');

router.post('/login', rescue(LoginValidation), rescue(controller.login));

module.exports = router;