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
        <h2>Modal Title</h2>
        <p>Modal content goes here.</p>
        <button onClick={onClose}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
