import ImageGalleryItem from '../ImageGalleryItem';
const ImageGallery = ({ gallery }) => {
  return (
    <ul className="ImageGallery">
      {gallery.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
