import React from 'react';
class ImageGalleryItem extends React.Component {
  componentWillUnmount() {
    console.log('CWUnmount-Gallery-Item');
  }
  render() {
    return (
      <li className="ImageGalleryItem">
        <a href={this.props.largeImageURL}>
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
