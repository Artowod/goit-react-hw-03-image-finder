import PropTypes from 'prop-types';
const Modal = ({ ModalCloseClickHandler, ModalCloseKeyHandler, largePic }) => {
  return (
    <div className="Overlay" onClick={ModalCloseClickHandler}>
      <div
        className="Modal"
        onKeyDown={ModalCloseKeyHandler}
        autoFocus={true}
        tabIndex="0"
      >
        <img src={largePic} alt="Large pic" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  ModalCloseClickHandler: PropTypes.func.isRequired,
  ModalCloseKeyHandler: PropTypes.func.isRequired,
  largePic: PropTypes.string.isRequired,
};

export default Modal;
