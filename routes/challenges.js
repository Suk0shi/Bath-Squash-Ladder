var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  req.app.get('db').collection('challenges').get()
    .then((snapshot) => {
      let challenges = [];
      snapshot.forEach((doc) => {
        challenges.push(doc.data());
      });
      res.render('challenges', { title: 'Challenges', challenges: challenges });
    })
    .catch((err) => {
      console.log('Error getting documents', err);
    });
});

module.exports = router;