import React from "react";
import { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import DropDown from "./DropDown";

function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      {/* https://hamburger-react.netlify.app/ */}
      <Hamburger size={30} toggled={isOpen} toggle={setOpen} />
      {isOpen && <DropDown />}
    </div>
  );
};

export default HamburgerMenu;
