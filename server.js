// SETUP//////////////////////////////////////////////////////////////////
// DEPENDENCIES
"use strict";

var express      = require('express'),
    mongoose     = require('mongoose'),
    bodyParser   = require('body-parser'),
    morgan       = require('morgan'),
    md5          = require('md5'),
    cookieParser = require('cookie-parser');


var port         = process.env.PORT || 3000;
var app          = express();

var bucket_list = require('./bucket_list.js');

// MIDDLEWARE
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(cookieParser());

// DATABASE
mongoose.connect('mongodb://localhost/bucket_list');

// LISTENER
app.listen(port);

// MODELS
var User = require('./models/user');


// ROUTES///////////////////////////////////////////////////////////////////
// SHOW ALL USERS
app.get('/users', function(req, res){

  User.find({})
    .populate({path: 'user', select: 'user_name create_at'})
    .exec(function(err, users){
      res.send(users);
    });
  console.log('Loading users...');
});

// CREATE USER
app.post('/users', function(req, res){

  password_hash = md5(req.body.password);

  var user = new User({
    username: req.body.username,
    password_hash: password_hash
  });

  user.save(function(err){
    if (err){
      console.log(err);
      res.statusCode = 503;
    } else{
      res.cookie('loggedinId', user.id);

      res.send({
        id: user.id,
        usernme: user.username,
        created_at: user.created_at
      });
    };
  });
});

// SINGLE USER
app.get('/user', function(req, res){
  console.log("Cookies :  " + req.cookies);
  res.send("Cookies logged");
});

// USER EDIT/UPDATE
app.put('/user/:id', function(req, res){

  User.findOneAndUpdate( {_id: req.params.id}, req,body, function(err, user){
    res.send(user);
  });
});

// DELETE USER
app.delete('/user/:id', function(req, res){
  User.findOneAndRemove( {_id: req.params.id}, function(err){
    res.send('User has been removed');
  });
});

// SHOW BUCKET LIST
app.get('/bucket_list', function(req,res){
  res.send(bucket_list);
});


// TERMINAL MSGS//////////////////////////////////////////////////////////
console.log('Silence please...');
setTimeout(function(){console.log('Curtains up...')}, 1000);
console.log('Server started on ' + port);

// TEMP STUFF && GARBAGE//////////////////////////////////////////////////


