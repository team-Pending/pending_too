import React from "react";
import { useNavigate } from 'react-router-dom'
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
  let navigate = useNavigate();

  const handleClick = (value) => {
    navigate(`/search/${value}`)
  }


  return (
    <>
    <motion.div 
    animate={{ y: 10}} 
    transition={{ type: "spring", bounce: 0.75 }}
    className="dropdown">
            {/* <a onClick={handleClick('music')} className="menu-item">
        <FontAwesomeIcon icon={faMoon} />
      </a> */}
      <button onClick={() => {handleClick('music')}} className="menu-item"> 
        <FontAwesomeIcon icon={faMusic} />
      </button>
      <button onClick={() => {handleClick('photo')}} className="menu-item">
        <FontAwesomeIcon icon={faCamera} />
      </button>
      <button onClick={() => {handleClick('art')} }className="menu-item">
        <FontAwesomeIcon icon={faPalette} />
      </button>
      <button onClick={() => {handleClick('book')}} className="menu-item">
        <FontAwesomeIcon icon={faBook} />
      </button>
      <button onClick={() => {handleClick('decor')}} className="menu-item">
        <FontAwesomeIcon icon={faCouch} />
      </button>
    </motion.div>
    </>
  );
}

export default DropDown;
