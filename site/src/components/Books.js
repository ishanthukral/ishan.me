import React, { Component } from 'react';
import Book from './Book';
import { Carousel } from 'react-bootstrap';

var request = require('request')

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
      <Carousel>
        { this.state.books.map(function (book) {
          return <Carousel.Item key={book.id}>
                    <Book book={book} />
                 </Carousel.Item>
        })}
      </Carousel>
    );
  }
}

export default Books;
