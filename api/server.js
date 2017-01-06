// server.js

var app     = require('express')();
var routes  = require('./routes');
var cors     = require('cors');

require('dotenv').config()

var port = process.env.PORT || 8080;

app.use(cors());
app.use('/', routes);

app.listen(port);
