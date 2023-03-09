import React from "react";
import { useState, useEffect } from "react"
import { Link, Route, Routes } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import {
  faMoon,
  faMusic,
  faCamera,
  faPalette,
  faBook,
  faCouch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import "./dropdown.css";
import Placeholder from "../placeholderData/Placeholder";

function DropDown() {
  const [target, setTarget]  = useState();

  const handleClick = (value) => {
    setTarget(value);
  }

  useEffect(() => {
    console.log(`Target updated to ${target}`)
  }, [target] ) 

  return (
    <>
    <motion.div 
    animate={{ y: 10}} 
    transition={{ type: "spring", bounce: 0.75 }}
    className="dropdown">
            <a href="#" className="menu-item">
        <FontAwesomeIcon icon={faMoon} />
      </a>
      <Link to={`/${target}`} className="menu-item" onClick={() => handleClick('music')}> 
        <FontAwesomeIcon icon={faMusic} />
      </Link>
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
      <a href="#" className="menu-item">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
    </motion.div>
    </>
  );
}

export default DropDown;
