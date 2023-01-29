import css from './image-gallery-item.module.scss';
import PropTypes, { shape } from 'prop-types';

const ImageGalleryItem = ({ items }) => {
  console.log(items);
  const elements = items.map(({ id, webformatURL, largeImageURL }) => (
    <li key={id} className={css.gallery_item}>
      <img src={webformatURL} alt="" />
    </li>
  ));
  return elements;
};

export default ImageGalleryItem;

ImageGalleryItem.defaultProps = {
  items: [],
};

ImageGalleryItem.propTypes = {
  items: PropTypes.arrayOf(
    shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
