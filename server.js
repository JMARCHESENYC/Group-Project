// SETUP//////////////////////////////////////////////////////////////////
// DEPENDENCIES
var express      = require('express'),
    mongoose     = require('mongoose'),
    bodyParser   = require('body-parser'),
    morgan       = require('morgan'),
    md5          = require('md5'),
    cookieParser = require('cookie-parser');

var port         = process.env.PORT || 3000;
var app          = express();

// MIDDLEWARE
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.use(cookieParser());

// DATABASE
// mongoose.connect('mongodb://localhost/project');

// LISTENER
app.listen(port);

// MODELS
var User = require('./models/user');

// ROUTES///////////////////////////////////////////////////////////////////




// TERMINAL MSGS//////////////////////////////////////////////////////////
console.log('Silence please...');
setTimeout(function(){console.log('Curtains up...')}, 1000);
console.log('Server started on ' + port);


// TEMP STUFF && GARBAGE//////////////////////////////////////////////////


