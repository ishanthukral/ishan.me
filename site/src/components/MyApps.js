import React, { Component } from 'react';
import MyApp from './MyApp';
import { Col } from 'react-bootstrap';

var request = require('request')

class MyApps extends Component {
  constructor() {
    super();
    this.state = { apps: [] };
  }

  componentDidMount() {
    var that = this;
    request.get('https://api.ishan.me/apps', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        that.setState(JSON.parse(body));
      }
    });
  }

  render() {
    return (
      <Col md={12} className="MyApps">
        <h3>Some stuff I've built</h3>
        { this.state.apps.map(function (app) {
          return <MyApp app={app} key={app.name} />
        })}
      </Col>
    );
  }
}

export default MyApps;
