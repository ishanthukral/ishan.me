import React, { Component } from 'react';
import { Col, Image, Modal } from 'react-bootstrap';

class Photo extends Component {
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
      <div>
        <Col md={2} sm={3} xs={4} className="Photo">
          <Image className="PhotoThumbnail" onClick={this.open} src={ this.props.photo.images.thumbnail.url } alt={ this.props.photo.id } rounded responsive />
        </Col>

        <Modal className="PhotoModal" show={this.state.showModal} onHide={this.close}>
          <Modal.Body>
            <Image className="PhotoPreview" src={ this.props.photo.images.standard_resolution.url } alt={ this.props.photo.id } rounded />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default Photo;
