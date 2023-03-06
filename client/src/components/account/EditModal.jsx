import React from "react";
import Edit from "./Edit";
import { motion } from "framer-motion"
import "./account.css";
import '../modal/modal.css';
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      durtion: .1,
      type: 'spring',
      damping: 30,
      stiffness: 500,
    }
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
}

const EditModal = ({ onClose }) => {

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  return (
    <motion.div
      variants={dropIn} 
      initial="hidden"
      animate="visible"
      exit="exit"
      className="modal" 
      onClick={handleBackdropClick}>

      <Edit />
    </motion.div>
  );
};

export default EditModal;
