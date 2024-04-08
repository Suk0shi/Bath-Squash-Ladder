var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('ladder', 
    {
      users: [
        {'position':'1', 'name':'Bob', 'surname':'Taylor'}, 
        {'position':'2', 'name':'Taylor', 'surname':'Bobson'}
      ], 
      loggedInUser: {'position':'2'}
    });
});

module.exports = router;