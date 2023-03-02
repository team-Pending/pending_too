import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import placeholder from './img1.jpg';
import './ShopCard.css';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"

function ShopCard() {
  return (
    <section className='card' style={{backgroundImage: `url(${placeholder})`}}>
      <h1>Username</h1>
      <h2>Title</h2>
      {/* <img className='card-img' src={placeholder} alt="" /> */}
      <ul className='info'>
        <li>Price</li>
        <li>iLink to store</li>
        <li>Information</li>
        <li>Add to cart</li>
      </ul>
      <ul className='like'>
        <li>
            <FontAwesomeIcon icon={faThumbsUp}/>
        </li>
        <li>
            <FontAwesomeIcon icon={faThumbsDown}/>
        </li>
      </ul>
    </section>
  )
}

export default ShopCard
