import css from './image-gallery-item.module.scss';
import PropTypes from 'prop-types';

const ImageGalleryItem = () => {
  return (
    <li className={css.gallery_item}>
      <img src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
