import React from "react";
import content from "../placeholderData/data.json";
import "./ShopCard.css";
import LikeDislike from "../LikeDislike/LikeDislike";

function ShopCard() {
  return content.map((content) => {
    return (
      <section
        key={content.index}
        className="card"
        style={{ backgroundImage: `url(${content.image})` }}
      >
        <h1>{content.username}</h1>
        <h2>{content.title}</h2>
        <ul className="info">
          <li>{content.price}</li>
          <li>{content.username}</li>
          <li>{content.information}</li>
          <li>
            <span className="add-to-cart">Add to cart</span>
          </li>
        </ul>
        <ul className="like">
          <LikeDislike />
        <div className="like-count">
          <p>{content.likes}</p>
        </div>
        </ul>
      </section>
    );
  });
}

export default ShopCard;
