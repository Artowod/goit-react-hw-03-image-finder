import React from 'react';
import Modal from '../Modal';
class ImageGalleryItem extends React.Component {
  state = {
    status: 'noModal',
  };

  componentWillUnmount() {
    console.log('CWUnmount-Gallery-Item');
  }

  openModal = event => {
    event.preventDefault();
    this.setState({ status: 'modal' });
  };

  closeModal = event => {
    //    event.preventDefault();
    console.log('click ', event);
    event.target.tagName === 'DIV' && this.setState({ status: 'noModal' });
  };

  closeModalByEsc = event => {
    //    event.preventDefault();
    console.log('Key ', event);
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

export default ImageGalleryItem;

/*
const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem">
      <a href={largeImageURL}>
        <img src={webformatURL} alt="" className="ImageGalleryItem-image" />
      </a>
    </li>
  );
};

export default ImageGalleryItem;

*/
