var express = require('express');
var router = express.Router();

const challenges_controller = require("../controllers/challengesController");
const users_controller = require("../controllers/usersController");
const { createUserWithEmailAndPassword } = require('firebase-admin/auth');

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
  
  console.log(`Firstname: ${firstname}`);
  console.log(`Surname: ${surname}`);
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  
  // create a new user
  const auth = req.app.get('auth');
  
  // create a new auth user
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     console.log(`User: ${user}`);
    //     res.redirect('/login');
    //     // ...
    //   })
    //   .catch((error) => {
      //     const errorCode = error.code;
      //     const errorMessage = error.message;
      //     res.redirect('/signUp');
      //     // ..
      //   });
      
      res.redirect('/signUp');
    });

    
router.get('/signUp', challenges_controller.signUp_get);
    
// return the homepage as a catch-all
router.get('/', challenges_controller.homepage_get);

module.exports = router;
    