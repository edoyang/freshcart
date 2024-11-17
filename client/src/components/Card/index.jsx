import { useState } from "react";
import "./style.scss";

const Card = ({ name, image, price, original_price, bonus }) => {
  const [imageError, setImageError] = useState(false);
  const percentageOff = original_price
    ? Math.floor(((original_price - price) / original_price) * 100)
    : 0;

  return (
    <div className="card">
      <div className="image-container">
        <img
          src={image}
          alt="product"
          onError={() => setImageError(true)}
          className={imageError ? "error" : ""}
        />
        {original_price == price ? (
          <></>
        ) : (
          <div className="promo-tag">
            <p>{percentageOff}%</p>
            <p>OFF</p>
          </div>
        )}
      </div>

      {bonus ? (
        <div className="name">
          <p>{name}</p>
          <p className="bonus">(Buy {bonus} Get 1 FREE)</p>
        </div>
      ) : (
        <div className="name">
          <p>{name}</p>
        </div>
      )}

      <div className="card-footer">
        {original_price == price ? (
          <div className="price">
            <p>${price}</p>
          </div>
        ) : (
          <div className="price">
            <p>${price}</p>
            <s>${original_price}</s>
          </div>
        )}
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
