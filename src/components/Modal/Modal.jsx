import React from 'react';
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

export default Modal;
