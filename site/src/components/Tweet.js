import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

var request = require('request');

class Tweet extends Component {
  constructor() {
    super();
    this.state = { tweet: {} };
  }

  componentDidMount() {
    var that = this;
    request.get('https://api.ishan.me/recentTweet', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        that.setState({ tweet: JSON.parse(body)[0] });
      }
    });
  }

  render() {
    return (
      <Col md={12} xs={12} className="Tweet">
        <h3> Latest Tweet </h3>
        { this.state.tweet && this.state.tweet.text &&
           <p> { this.state.tweet.text } </p>
        }
      </Col>
    );
  }
}

export default Tweet;
