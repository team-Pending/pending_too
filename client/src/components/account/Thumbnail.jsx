import React from 'react';
import { motion, AnimatePresence } from "framer-motion"
import content from '../placeholderData/data.json'
import EditModal from './EditModal';
import { useState } from 'react';
import './account.css'



function Thumbnail() {
    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const handleEditModalOpen = () => {
      setIsModalVisible(true);
    };
  
    const handleEditModalClose = () => {
      setIsModalVisible(false);
    };
  
    return (
        content.map(content => {
            return (
                <div key={content.key} className="thumbnail">
                    <p>{content.title}</p>
                    <button onClick={handleEditModalOpen} className='thumb-button'><span className='edit'>Edit</span></button>
                    <AnimatePresence
                    initial={false}
                    wait={true}
                    >


                    {isModalVisible && <EditModal onClose={handleEditModalClose} />}
                    </AnimatePresence>

                    <img src={content.image} alt={content.title} />
                </div >
            )
        })
    );
}

export default Thumbnail;
