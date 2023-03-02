import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons"
import content from '../placeholderData/data.json'
import './ShopCard.css';

function ShopCard() {
    return(

        content.map(content => {
            
            return (
                <section key={content.index} className='card' style={{backgroundImage: `url(${content.image})`}}>
      <h1>{content.username}</h1>
      <h2>{content.title}</h2>
      <ul className='info'>
        <li>{content.price}</li>
        <li>{content.username}</li>
        <li>{content.information}</li>
        <li>Add to cart</li>
      </ul>
      <ul className='like'>
        <li>
            <a href="" className='thumb'><FontAwesomeIcon icon={faThumbsUp}/></a>
        </li>
        <li>
            <a href="" className="thumb"><FontAwesomeIcon icon={faThumbsDown}/></a>
        </li>
      </ul>
      <div className="like-count" ><p>{content.likes}</p></div>
    </section>
  )
})
)
}

export default ShopCard
