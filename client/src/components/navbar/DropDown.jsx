import React from 'react'
import { useState, useEffect } from 'react'
import ModalButton from '../modal/ModalButton'

const DropDown = () => {
    const [slide, setSlide] = useState(true);

    useEffect(() => {
        setSlide(true);
    }, []);

  return (
    <div className={slide ? "slide-in dropdown" : 'dropdown'} >
      <ModalButton />
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>

    </div>
  )
}

export default DropDown
