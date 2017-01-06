import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class AboutMe extends Component {
  render() {
    return (
      <Col md={12} className="AboutMe">
        <h1>Ishan Thukral</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
      </Col>
    );
  }
}

export default AboutMe;
