import React, { Component } from 'react';
import Photo from './Photo';
import { Col } from 'react-bootstrap';

var request = require('request')

class Photos extends Component {
  constructor() {
    super();
    this.state = { photos: [] };
  }

  componentDidMount() {
    var that = this;
    request.get('http://localhost:8080/recentPhotos', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        that.setState({photos: JSON.parse(body).data});
      }
    });
  }

  render() {
    return (
      <Col md={12} className="Photos">
        <h3>Recent Photos</h3>
        { this.state.photos.map(function (photo) {
          return <Photo photo={photo} key={photo.id} />
        })}
      </Col>
    );
  }
}

export default Photos;
