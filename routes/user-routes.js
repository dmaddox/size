var passport = require('passport');
var path = require("path");
var db = require('../models');
const router = require("express").Router();



// Routes
// =============================================================
module.exports = function(app, passport) {

// Authentication Routes ==================
// ========================================

  // PASSSPORT CUSTOM CALLBACK ROUTES =========

  app.post('/loginform', function(req, res, next) {
    console.log("/loginform user route");
    // console.log(res);
      passport.authenticate('local-login', function(err, user, info) {
        console.log("/loginform authenticate function");
        console.log(err);
        console.log(user);
        console.log(info);
          if (err) { 
            return res.status(500).json(error);
           }
          if (!user) { 
            return res.status(401).json(info.message);
           }
          req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.redirect('/');
          });
      })(req, res, next);
  });

  app.post('/signupform', function(req, res, next) {
      passport.authenticate('local-signup', function(err, user, info) {
          if (err) { return next(err); }
          if (!user) { return res.render('/signup'); }
          req.logIn(user, function(err) {
              if (err) { return next(err); }
              return res.json({detail: info});
          });
      })(req, res, next);
  });

  // alternative /loginform 
  // app.post('/loginform', function(req, res, next) {
  //   passport.authenticate('local-login', function(err, user, info) {
  //     console.log( "err is " + err);
  //     console.log( "user is " + user);
  //     console.log( "info is ");
  //     console.log(info);
  //    if (err)  { 
  //     console.log(err);
  //     return next(err);
  //      }
  //           // if (!user) { return res.status(401).send(info); }
  //           if (!user) { return res.status(401).json({status: "401", response: info}) };
  //           req.logIn(user, function(err) {
  //             if (err) { return res.status(401).send({"ok": false}); }
  //             return res.json({status: "Success", redirect: '/'});
  //           });
  //   })(req, res, next);    
  // });


// END PASSSPORT CUSTOM CALLBACK ROUTES ^^  

// PASSSPORT STANDARD ROUTES =========

  // // process the signup form
  // app.post('/loginform', passport.authenticate('local-login', {
  //   successRedirect : '/', // redirect to the add pairing page
  //   failureRedirect : '/login', // redirect back to the signup page if there is an error
  //   failureFlash: true
  // }));


  // // process the signup form
  // app.post('/signupform', passport.authenticate('local-signup', {
  //   successRedirect : '/', // redirect to the add pairing page
  //   failureRedirect : '/login', // redirect back to the signup page if there is an error
  //   failureFlash: true
  // }));
  // END PASSSPORT STANDARD ROUTES ^^

  // app.post('/signupform', function(req, res, next) {
  //   passport.authenticate('local-signup', function(err, user, info) {
  //    if (err)  { return next(err); }
  //           if (!user) { return res.status(401).send({"ok": false}); }
  //           req.logIn(user, function(err) {
  //             if (err) { return res.status(401).send({"ok": false}); }
  //             return res.json({status: "Success", redirect: '/'});
  //           });
  //   })(req, res, next);    
  // });

  // PASSSPORT CUSTOM CALLBACK ROUTES =========

    // send signup errors to client side
    // app.get('/signupform', function(req, res) {
    //     res.send({message: req.flash('error')});
    // });

    // send log-in errors to client side
    // app.get('/loginform', function(req, res) {
    //     res.send({message: req.flash('error')});
    // });
  // END PASSSPORT CUSTOM CALLBACK ROUTES ^^

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

  //determine is user is logged in
  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/signup');
  }

};
