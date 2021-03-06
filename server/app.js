/* jshint node:true */
'use strict';

// var      fs = require('fs');
var express = require('express');
var  stylus = require('stylus');

var app = express();
app.set('port', process.env.PORT || 3000);

var sessOptions = {
  key: 'antherion.sid',
  secret: 'mm*pl]f$yj=4][@m$kitniu#6v[$0b9q6d?n\\v&@l%yc?&ulno'
};

var devConfig = function () {
  app.use(express.favicon('client/img/favicon.ico'));
  app.use(stylus.middleware({
    debug: true,
    src: 'client',
    dest: 'client'
  }));
  app.use(express.static('client'));
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session(sessOptions));
  app.use(app.router);
  app.use(express.errorHandler());
};
app.configure('development', devConfig);
app.configure('localdev', devConfig);

// var prodConfig = function () {
//   app.use(express.favicon());
//   app.use(express.static('build'));
//   app.use(express.logger('dev'));
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(express.cookieParser());
//   app.use(express.session(sessOptions));
//   app.use(app.router);
// };
app.configure('staging', devConfig);
app.configure('production', devConfig);

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port') + ' in environment ' + app.get('env'));
});
