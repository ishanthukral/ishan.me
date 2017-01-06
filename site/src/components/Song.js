import React, { Component } from 'react';
import { Col, Media } from 'react-bootstrap';

var request = require('request');

class Song extends Component {
  constructor() {
    super();
    this.state = { track: {} };
  }

  componentDidMount() {
    var that = this;
    request.get('https://api.ishan.me/recentTracks', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        that.setState({ track: JSON.parse(body).recenttracks.track[0] });
      }
    });
  }

  render() {
    return (
      <Col md={12} xs={12} className="Song">
        <h3> Latest Track </h3>
        { this.state.track && this.state.track.name &&
          <Media>
            <Media.Left>
              <img width={64} height={64} src={ this.state.track.image[2]["#text"] } alt="Image" />
            </Media.Left>
            <Media.Body>
              <Media.Heading> { this.state.track.name } </Media.Heading>
              <p> { this.state.track.album["#text"] } </p>
            </Media.Body>
          </Media>
        }
      </Col>
    );
  }
}

export default Song;
