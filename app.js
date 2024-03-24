// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var challengesRouter = require('./routes/challenges');

var app = express();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX8_5UWWZ8WRSobm1whf71m2Q-Z1AmuGY",
  authDomain: "bathsquash.firebaseapp.com",
  projectId: "bathsquash",
  storageBucket: "bathsquash.appspot.com",
  messagingSenderId: "178684431385",
  appId: "1:178684431385:web:ea23a9ef53688e29e8ee88",
  measurementId: "G-9DEF8K42EG"
};

// Initialize Firebase
const fire_app = initializeApp(firebaseConfig);
const db = getFirestore(fire_app);
// const analytics = getAnalytics(fire_app);

// Prevent errors when in the console
db.settings({ timestampsInSnapshots: true });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.set('db', db);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/challenges', challengesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
