import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion"
import {
  faMoon,
  faMusic,
  faCamera,
  faPalette,
  faBook,
  faCouch,
} from "@fortawesome/free-solid-svg-icons";

import "./dropdown.css";

function DropDown() {
  return (
    <motion.div 
    animate={{ y: 10}} 
    transition={{ type: "spring", bounce: 0.75 }}
    className="dropdown">
            <a href="#" className="menu-item">
        <FontAwesomeIcon icon={faMoon} />
      </a>
      <a href="#" className="menu-item">
        <FontAwesomeIcon icon={faMusic} />
      </a>
      <a href="#" className="menu-item">
        <FontAwesomeIcon icon={faCamera} />
      </a>
      <a href="#" className="menu-item">
        <FontAwesomeIcon icon={faPalette} />
      </a>
      <a href="#" className="menu-item">
        <FontAwesomeIcon icon={faBook} />
      </a>
      <a href="#" className="menu-item">
        <FontAwesomeIcon icon={faCouch} />
      </a>
    </motion.div>
  );
}

export default DropDown;
