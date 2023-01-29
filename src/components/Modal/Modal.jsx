import css from './image-gallery-item.module.scss';

const Modal = () => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src="#" alt="" />
      </div>
    </div>
  );
};

export default Modal;
