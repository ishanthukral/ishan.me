var routes  = require('express').Router();
var request = require('request')
var dataUrl = 'https://raw.githubusercontent.com/ishanthukral/ishan.me/master/data';

routes.get('/aboutme', function(req, res) {
  request.get(dataUrl + '/aboutMe.md', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json({ message: body });
    } else {
      res.status(500).send('Could not find data')
    }
  });
});

module.exports = routes;
