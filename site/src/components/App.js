import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import AboutMe from './AboutMe';
import MyApps from './MyApps';
import Photos from './Photos';
import Books from './Books';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Col md={8} mdOffset={2}>
          <Row><AboutMe/></Row>
          <Row><MyApps/></Row>
          <Row><Photos/></Row>
        </Col>
        <Row><Footer/></Row>
      </Grid>
    );
  }
}

export default App;
