var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ladder', { users: [{'position':'1', 'name':'Bob', 'surname':'Taylor'}, 
  {'position':'2', 'name':'Taylor', 'surname':'Bobson'}], loggedInUser: {'position':'2'} });
});

router.get('/personal', function(req, res, next) {
  res.render('personal');
});

router.get('/global', function(req, res, next) {
  res.render('global');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});
module.exports = router;
