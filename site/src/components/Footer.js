import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

var request = require('request')

class Footer extends Component {
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
      <Col md={12} className="Footer">
        <p>Ishan Thukral</p>
      </Col>
    );
  }
}

export default Footer;
