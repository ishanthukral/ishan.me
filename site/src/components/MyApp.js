import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';

class MyApp extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Col md={2} sm={2} xs={4} className="MyApp">
        <Image className="AppIcon" src={ this.props.app.icon } alt={ this.props.app.name } rounded responsive />
        <p className="AppName"> { this.props.app.name } </p>
      </Col>
    );
  }
}

export default MyApp;
