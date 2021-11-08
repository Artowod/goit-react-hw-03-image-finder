import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from '../Modal';
class ImageGalleryItem extends Component {
  state = {
    status: 'noModal',
  };

  openModal = event => {
    event.preventDefault();
    this.setState({ status: 'modal' });
  };

  closeModal = event => {
    event.target.tagName === 'DIV' && this.setState({ status: 'noModal' });
  };

  closeModalByEsc = event => {
    event.key === 'Escape' && this.setState({ status: 'noModal' });
  };

  render() {
    return (
      <li className="ImageGalleryItem">
        {this.state.status === 'modal' && (
          <Modal
            ModalCloseClickHandler={this.closeModal}
            ModalCloseKeyHandler={this.closeModalByEsc}
            largePic={this.props.largeImageURL}
          />
        )}
        <a href={this.props.largeImageURL} onClick={this.openModal}>
          <img
            src={this.props.webformatURL}
            alt=""
            className="ImageGalleryItem-image"
          />
        </a>
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
