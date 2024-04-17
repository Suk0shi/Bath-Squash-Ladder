var express = require('express');
var router = express.Router();

const challenges_controller = require("../controllers/challengesController");
const users_controller = require("../controllers/usersController");
const { createUserWithEmailAndPassword } = require('firebase-admin/auth');

/* GET home page. */
router.get('/', challenges_controller.homepage_get);

router.get('/personal', challenges_controller.challenges_get);

router.get('/global', challenges_controller.global_get);

router.get('/login', challenges_controller.login_get);

router.get('/signUp', challenges_controller.signUp_get);


// create a route to handle the POST request for the SignUp form
router.post('/signUp', function(req, res, next) {
  // get the data from the form
  const firstname = req.body.firstname
  const surname = req.body.surname
  const email = req.body.email
  const password = req.body.password

  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  console.log(`Firstname: ${firstname}`);
  console.log(`Surname: ${surname}`);

  // create a new user
  const auth = req.app.get('auth');

  console.log(auth);

  // create a new auth user
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

  res.redirect('/login');
});

module.exports = router;
