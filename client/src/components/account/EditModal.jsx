import React from "react";
import Edit from "./Edit";
import "./account.css";

const EditModal = ({ onClose }) => {
    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      };
  return (
    <div className="modal" onClick={handleBackdropClick}>
        <Edit />
    </div>
  );
};

export default EditModal;
