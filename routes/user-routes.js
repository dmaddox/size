var passport = require('passport');
var path = require("path");
var db = require('../models');
const router = require("express").Router();



// Routes
// =============================================================
module.exports = function(app, passport) {

// Authentication Routes
  // =====================

  // send signup errors to client side
  app.get('/signupform', function(req, res) {
      res.send({message: req.flash('error')});
  });

  // send log-in errors to client side
  app.get('/signinform', function(req, res) {
      res.send({message: req.flash('error')});
  });

  // process the login form
  app.post('/signinform', passport.authenticate('local-login', {
      successRedirect : '/add', // redirect to the secure profile section
      failureRedirect : '/signin', // redirect back to the signup page if there is an error
      failureFlash: true
  }));

  // // process the signup form
  app.post('/signupform', passport.authenticate('local-signup', {
    successRedirect : '/add', // redirect to the add pairing page
    failureRedirect : '/signup', // redirect back to the signup page if there is an error
    failureFlash: true
  }));

  app.get('/loggedin', function(req, res) {
    if (req.user) {
      res.send(true);
    } else {
      res.send(false);
    }
  });

    app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  // add route loads add.html
  app.get("/add", isLoggedIn, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  //determine is user is logged in
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/signup');
  }

  // Handle 404 - Keep this as a last route
  app.use(function(req, res, next) {
    res.status(404);
    res.send('404: File Not Found');
  });

};
