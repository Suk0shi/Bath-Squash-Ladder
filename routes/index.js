const express = require('express');
var router = express.Router();

const challenges_controller = require("../controllers/challengesController");
const users_controller = require("../controllers/usersController");
const { doc } = require('firebase-admin/firestore');

/* GET home page. */

router.get('/personal', challenges_controller.challenges_get);

router.get('/global', challenges_controller.global_get);

router.get('/login', challenges_controller.login_get);

// create a route to handle the POST request for the SignUp form
router.post('/signUp', function(req, res, next) {
  // TODO: Express validation

  console.log(req.body)
  
  // get the data from the form
  const firstname = req.body.firstname
  const surname = req.body.surname
  const email = req.body.email
  const password = req.body.password
  
  // create a new user
  const auth = req.app.get('auth');
  const db = req.app.get('db');

  // create a new user with the email and password
  auth
  .createUser({
    email: email,
    emailVerified: false,
    password: password,
    displayName: firstname + ' ' + surname,
    disabled: false,
  })
  .then((userRecord) => {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log('Successfully created new user:', userRecord.uid);

    // create a new user in the database wih the user's auth uid
    db.collection('players').doc(userRecord.uid).set({
      firstname: firstname,
      surname: surname,
      email: email,
      squashLevelsUID: null
    });

    res.redirect('/login');
  })
  .catch((error) => {
    console.log('Error creating new user:', error);
    req.flash('error', error.message);
    res.redirect('/signUp');
  });
});

    
router.get('/signUp', challenges_controller.signUp_get);
    
// return the homepage as a catch-all
router.get('/', challenges_controller.homepage_get);

module.exports = router;
    