import React from 'react';
import Modal from 'react-modal';

const modalStyle = {
  overlay: {
    zIndex: 999,
  },
  content: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const OverlayModal = ({ title, onClose, children }) => {
  Modal.setAppElement('#modal');

  return (
    <Modal
      isOpen={true}
      style={modalStyle}
      contentLabel="Example"
    >
      <h1>{title}</h1>
      <div>{children}</div>
      <button onClick={onClose}>Fermer</button>
    </Modal>
  );
};

export default OverlayModal;
