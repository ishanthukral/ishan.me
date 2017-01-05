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
          api_key: process.env.LASTFM_API_KEY,
          format: 'json' },
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json(JSON.parse(body));
    } else {
      res.status(500).send('Could not find data');
    }
  });
});


/**  Recent Photos */

routes.get('/recentPhotos', function (req, res) {
  request({
    url: 'https://api.instagram.com/v1/users/2114353064/media/recent/',
    qs: { client_id: process.env.INSTAGRAM_CLIENT_ID,
          access_token: process.env.INSTAGRAM_ACCESS_TOKEN },
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json(JSON.parse(body));
    } else {
      res.status(500).send('Could not find data');
    }
  });
});


/** Recommended Articles */

routes.get('/recommendedArticles', function (req, res) {
  request({
    url: 'https://getpocket.com/v3/get',
    qs: { access_token: process.env.POCKET_ACCESS_TOKEN,
          consumer_key: process.env.POCKET_CONSUMER_KEY,
          favorite: 1 },
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json(JSON.parse(body));
    } else {
      res.status(500).send('Could not find data');
    }
  });
});


/** Recent Tweet */

routes.get('/recentTweet', function (req, res) {
  request({
    url: 'https://api.twitter.com/1.1/statuses/user_timeline.json',
    oauth: { consumer_key: process.env.TWITTER_CONSUMER_KEY,
             consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
             token: process.env.TWITTER_TOKEN,
             token_secret: process.env.TWITTER_TOKEN_SECRET },
    qs: { screen_name: 'ishanthukral',
          count: 1 },
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json(JSON.parse(body));
    } else {
      res.status(500).send('Could not find data');
    }
  });
});


/** Reading List */

routes.get('/readingList', function (req, res) {
  request({
    url: 'https://api.pinterest.com/v1/boards/ishan/reading-list-2017/pins/',
    qs: { access_token: process.env.PINTEREST_ACCESS_TOKEN,
          fields: 'image,note' },
    method: 'GET'
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.status(200).json(JSON.parse(body));
    } else {
      res.status(500).send('Could not find data');
    }
  });
});

module.exports = routes;
