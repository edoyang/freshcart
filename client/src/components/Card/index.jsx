import { useState } from "react";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const Card = ({ id, name, image, price, original_price, bonus }) => {
  const [imageError, setImageError] = useState(false);
  const percentageOff = original_price
    ? Math.floor(((original_price - price) / original_price) * 100)
    : 0;

  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, quantity: 1, image }));
  };

  const onLinkMouseDown = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card">
      <div className="image-container">
        <img
          src={image}
          alt="product"
          onError={() => setImageError(true)}
          className={imageError ? "error-image" : ""}
        />
        {original_price == price ? null : (
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
        <button
          data-id={id}
          className="add-to-cart"
          onClick={handleAddToCart}
          onMouseDown={onLinkMouseDown}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
