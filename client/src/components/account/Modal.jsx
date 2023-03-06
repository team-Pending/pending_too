import React from "react";
import LoginForm from "../account/LoginForm";
import "./modal.css";

const LoginModal = ({ onClose }) => {
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

export default LoginModal;
