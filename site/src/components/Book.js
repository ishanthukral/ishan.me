import React, { Component } from 'react';
import { Image, Carousel } from 'react-bootstrap';

class Book extends Component {
  constructor(props) {
    super();
    this.state = {showModal: false};

    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    return (
      <Image className="BookThumbnail"
           src={ this.props.book.image.original.url }
           alt={ this.props.book.node } responsive />
    );
  }
}

export default Book;
