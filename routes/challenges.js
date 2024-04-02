var express = require('express');
var router = express.Router();

const challenges_controller = require("../controllers/challengesController");
const users_controller = require("../controllers/usersController");

/* GET users listing. */
router.get('/', challenges_controller.homepage_get);

module.exports = router;