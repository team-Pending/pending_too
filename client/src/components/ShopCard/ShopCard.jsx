import "./ShopCard.css";
import LikeDislike from "../LikeDislike/LikeDislike";

function ShopCard({content}) {
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
            <button className="add-to-cart">Add to cart</button>
            {/* <button className="remove-from-cart">Remove from cart</button> */}
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
  }

export default ShopCard;
