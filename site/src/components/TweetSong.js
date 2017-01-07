import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

import Tweet from './Tweet';
import Song from './Song';

class TweetSong extends Component {
  render() {
    return (
      <Col md={6} sm={6} xs={12} className="TweetSong">
        <Tweet />
        <Song />
      </Col>
    );
  }
}

export default TweetSong;
