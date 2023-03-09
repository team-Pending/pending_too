import React from "react";
import { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import DropDown from "./DropDown";
import { motion, AnimatePresence } from "framer-motion";

function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen 
        && 
        event.target !== document.querySelector(".hamburger-react")
        &&
        !event.target.closest(".dropdown") 
       ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div>
      {/* https://hamburger-react.netlify.app/ */}
      <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
      <AnimatePresence
        initial={false}
        wait={true}
      >
        {isOpen && (<DropDown />)}
      </AnimatePresence>
    </div>
  );
}

export default HamburgerMenu;
