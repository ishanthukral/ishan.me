var routes  = require('express').Router();
var request = require('request')
var apiDataUrl = 'https://raw.githubusercontent.com/ishanthukral/ishan.me/master/data';

/** About Me */

routes.get('/aboutme', function (req, res) {
  request.get(apiDataUrl + '/aboutMe.md', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json({ message: body });
    } else {
      res.status(500).send('Could not find data');
    }
  });
});


/** Recent Tracks */

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


/**  Recent Photos */

routes.get('/recentPhotos', function (req, res) {
  request({
    url: 'https://api.instagram.com/v1/users/2114353064/media/recent/',
    qs: { client_id: process.env.INSTAGRAM_CLIENTID,
          access_token: process.env.INSTAGRAM_ACCESSTOKEN },
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
