var express = require('express');
const { response } = require('../app');
var router = express.Router();

const challenges_controller = require("../controllers/challengesController")
const users_controller = require("../controllers/usersController")

/* GET home page. */
router.get('/', challenges_controller.homepage_get);

router.get('/personal', challenges_controller.challenges_get);

router.get('/global', challenges_controller.global_get);

router.get('/login', challenges_controller.login_get);

router.get('/signUp', challenges_controller.signUp_get);

module.exports = router;
