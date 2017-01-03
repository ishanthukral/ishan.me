// server.js

var app     = require('express')();
var routes  = require('./routes');

var port = process.env.PORT || 8080;

app.use('/api', routes);

app.listen(port);
