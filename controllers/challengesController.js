/* GET home page. */
exports.homepage_get = (req, res, next) => {
    res.render('ladder', 
      {
        users: [
          {'position':'1', 'name':'Bob', 'surname':'Taylor'}, 
          {'position':'2', 'name':'Taylor', 'surname':'Bobson'}
        ], 
        loggedInUser: {'position':'2'}
      });
  };
  
exports.challenges_get = (req, res, next) => {
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
};

exports.global_get = (req, res, next) => {
    res.render('global');
};

exports.login_get = (req, res, next) => {
    res.render('login');
};

exports.signUp_get = (req, res, next) => {
    res.render('signUp');
};