var routes  = require('express').Router();
var request = require('request')
var apiDataUrl = 'https://raw.githubusercontent.com/ishanthukral/ishan.me/master/data';

routes.get('/aboutme', function (req, res) {
  request.get(apiDataUrl + '/aboutMe.md', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json({ message: body });
    } else {
      res.status(500).send('Could not find data');
    }
  });
});

routes.get('/recentTracks', function (req, res) {
  request({
    url: 'http://ws.audioscrobbler.com/2.0/',
    qs: { method: 'user.getrecenttracks',
          user: 'ishanthukral',
          api_key: process.env.LASTFM_APIKEY,
          format: 'json' },
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).send(body);
    } else {
      res.status(500).send('Could not find data');
    }
  });
});

module.exports = routes;
