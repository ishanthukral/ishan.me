// server.js

var app     = require('express')();
var routes  = require('./routes');
require('dotenv').config()

var port = process.env.PORT || 8080;

app.use('/', routes);

app.listen(port);
