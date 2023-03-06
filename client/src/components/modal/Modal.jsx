import React from "react";
import "./modal.css";

const Modal = ({ onClose }) => {
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      };
  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content">
        <LoginForm />
      </div>
    </div>
  );
};

export default Modal;
