import React from 'react';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Modal, Overlay } from './Modal.Styled';

const modalRoot = document.querySelector('#modal');

class ModalWindow extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    const { keyCode } = event;
    if (keyCode === 27) {
      console.log('rrrr');
      this.props.close();
    }
  };

  handleBackdropClick = (event) => {
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      this.props.close();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>{this.props.children}</Modal>
      </Overlay>,
      modalRoot
    );
  }
}

export default ModalWindow;