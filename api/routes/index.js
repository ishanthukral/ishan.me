var routes = require('express').Router();

routes.get('/aboutme', function(req, res) {
  res.status(200).json({ message: 'hello world' });
});

module.exports = routes;
