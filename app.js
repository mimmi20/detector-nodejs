var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var csrf = require('csurf');
var responseTime = require('response-time');
var methodOverride = require('method-override');
var session = require('express-session');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('trust proxy', true);
app.set('jsonp callback name', 'cb');
app.set('json spaces', 4);
app.set('case sensitive routing', true);
app.set('strict routing', true);
app.set('x-powered-by', false);

app.use(compression({threshold: 1}));
app.use(logger('dev'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(responseTime(4));
//app.use(favicon(__dirname + '/public/favicon.ico'));
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false,
  lastModified: true,
  maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now());
  }
};

app.use(express.static(__dirname + '/public', options));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'mimmi20', resave: true, saveUninitialized: true}));
app.use(csrf({ cookie: true }));

app.use('/', routes);

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
