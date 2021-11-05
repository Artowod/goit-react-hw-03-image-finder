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
