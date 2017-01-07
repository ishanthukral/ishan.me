import React, { Component } from 'react';
import Photo from './Photo';
import { Col, Image } from 'react-bootstrap';

var request = require('request')

class Photos extends Component {
  constructor() {
    super();
    this.state = { photos: [] };
  }

  componentDidMount() {
    var that = this;
    request.get('https://api.ishan.me/recentPhotos', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        that.setState({photos: JSON.parse(body).data.slice(0, 10)});
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
        <Col md={2} sm={3} xs={4} className="Photo">
          <Image className="PhotoThumbnail" src={require("../../public/assets/instagram_logo.png")} alt="Instagram Icon" rounded responsive />
        </Col>
      </Col>
    );
  }
}

export default Photos;
