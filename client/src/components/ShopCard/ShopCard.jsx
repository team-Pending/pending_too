import "./shopCard.css";
import LikeDislike from "../LikeDislike/LikeDislike";

function ShopCard({content}) {
    return (
      <section
      key={content.id}
        className="card"
        style={{ backgroundImage: `url(${content.image})` }}
      >
        <h1>{content.username}</h1>
        <h2>{content.productName}</h2>
        <ul className="info">
          <li>{content.price}</li>
          <li>{content.username}</li>
          <li>{content.productDescription}</li>
          <li>
            <button className="add-to-cart">Add to cart</button>
            {/* <button className="remove-from-cart">Remove from cart</button> */}
          </li>
        </ul>
        <ul className="like">
          <LikeDislike />
        <div className="like-count">
          <p>{content.rating}</p>
        </div>
        </ul>
      </section>
    );
  }

export default ShopCard;
