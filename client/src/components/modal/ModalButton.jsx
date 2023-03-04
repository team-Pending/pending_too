import React from 'react'
import { useState } from 'react';
import Modal from './Modal';

const ModalButton = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const handleModalOpen = () => {
      setIsModalVisible(true);
    };
  
    const handleModalClose = () => {
      setIsModalVisible(false);
    };
  
    return (
      <div>
        <button onClick={handleModalOpen}>Open Modal</button>
        {isModalVisible && <Modal onClose={handleModalClose} />}
      </div>
    );
  };

export default ModalButton
