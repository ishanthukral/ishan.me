import React, { Component } from 'react';
import Book from './Book';
import { Col } from 'react-bootstrap';

var request = require('request');

class Books extends Component {
  constructor() {
    super();
    this.state = { books: [] };
  }

  componentDidMount() {
    var that = this;
    request.get('https://api.ishan.me/readingList', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        that.setState({books: JSON.parse(body).data});
      }
    });
  }

  render() {
    return (
      <Col md={6} sm={12} xs={12} className="Books">
        <h3>Reading List</h3>
        { this.state.books && this.state.books.length > 0 &&
          <Book book={ this.state.books[0] } />
        }
      </Col>
    );
  }
}

export default Books;
