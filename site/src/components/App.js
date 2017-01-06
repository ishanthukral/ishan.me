import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import AboutMe from './AboutMe';
import MyApps from './MyApps';
import Photos from './Photos';
import Books from './Books';
import TweetSong from './TweetSong';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <Grid className="App">
        <Col md={8} mdOffset={2}>
          <Row><AboutMe/></Row>
          <Row><MyApps/></Row>
          <Row>
            <Books/>
            <TweetSong/>
          </Row>
          <Row><Photos/></Row>
        </Col>
      </Grid>
    );
  }
}

export default App;
