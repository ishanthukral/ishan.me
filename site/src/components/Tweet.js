import React, { Component } from 'react';
import { Col, Panel } from 'react-bootstrap';

var request = require('request');
var twitter = require('twitter-text');

class Tweet extends Component {
  constructor() {
    super();
    this.state = { tweet: {} };

    this.renderTweet = this.renderTweet.bind(this);
    this.renderTweetWithRetweet = this.renderTweetWithRetweet.bind(this);
  }

  componentDidMount() {
    var that = this;
    request.get('https://api.ishan.me/recentTweet', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        that.setState({ tweet: JSON.parse(body)[0] });
      }
    });
  }

  renderTweet() {
    if (this.state.tweet.is_quote_status) {
      return this.renderTweetWithRetweet();
    }
    return <div className="content" dangerouslySetInnerHTML={{__html: "<p>" + twitter.autoLink(twitter.htmlEscape(this.state.tweet.text)) + "</p>" }} />
  }

  renderTweetWithRetweet() {
    var quoteRender = <div className="content" dangerouslySetInnerHTML={{__html: "<p>" + twitter.autoLink(twitter.htmlEscape(this.state.tweet.quoted_status.text)) + "</p>" }} />
    var tweetRender = <div className="content" dangerouslySetInnerHTML={{__html: "<p>" + twitter.autoLink(twitter.htmlEscape(this.state.tweet.text)) + "</p>" }} />
    return (
      <div>
        { tweetRender }
        <Panel>
          { quoteRender }
        </Panel>
      </div>
    );
  }

  render() {
    return (
      <Col md={12} xs={12} className="Tweet">
        <h3> Latest Tweet </h3>
        { this.state.tweet && this.state.tweet.text &&
          this.renderTweet()
        }
      </Col>
    );
  }
}

export default Tweet;
