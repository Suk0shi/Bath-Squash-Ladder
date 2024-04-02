var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET home page. */
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

router.get('/personal', function(req, res, next) {
  // get all the challenges from the firestore database
  const db = req.app.get('db')

  const challengesRef = db.collection('challenges')
  challengesRef
    .get()
    .then(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()))
    })
    .catch(error => {
      console.log(`Oops! ${error}`)
    })

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
