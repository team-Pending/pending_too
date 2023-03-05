import React from 'react'
// import { useState, useEffect } from 'react'
// import ModalButton from '../modal/ModalButton'
import './dropdown.css'

function DropDown() {
  function DropdownItem(props){
    <a href="#" className="menu-item">
      {props.children}
    </a>

  }
    // const [slide, setSlide] = useState(true);

    // useEffect(() => {
    //     setSlide(true);
    // }, []);

  return (
    <div className='dropdown'>
      <DropdownItem></DropdownItem>
    </div>
  )
}

export default DropDown
