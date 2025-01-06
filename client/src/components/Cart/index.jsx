import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addItemOnCart,
  removeItem,
  removeAllItems,
} from "../../redux/slices/cartSlice";
import "./style.scss";
import { Link } from "react-router-dom";
import CheckoutButton from "../CheckoutButton";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.total_price);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleAddItem = (item) => {
    dispatch(addItemOnCart(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleRemoveAllItems = (item) => {
    dispatch(removeAllItems());
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (
      e.target.classList.contains("add-to-cart") &&
      e.target.getAttribute("data-id")
    ) {
      setIsCartOpen(true);
      return;
    }

    if (cartRef.current && !cartRef.current.contains(e.target)) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={cartRef} className="cart">
      <div onClick={toggleCart} className="cart-header">
        <img src="icons/cart.svg" alt="cart" />
        <p>Cart</p>
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </div>

      {isCartOpen && cart.length > 0 && (
        <div className="cart-container">
          {cart.map((item, index) => (
            <CartItem
              key={index}
              item={item}
              handleRemoveCart={handleRemoveCart}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
            />
          ))}
          <div className="total">
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <div className="buttons">
              <CheckoutButton />
              <button onClick={handleRemoveAllItems} className="removeAllItems">
                Remove Cart
              </button>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && cart.length === 0 && (
        <div className="cart-container empty">
          <p>Cart is empty</p>
        </div>
      )}
    </div>
  );
};

const CartItem = ({
  item,
  handleRemoveCart,
  handleAddItem,
  handleRemoveItem,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="cart-item">
      <div className="image-cart-container">
        <img
          src={
            imageError
              ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
              : item.image
          }
          alt={item.name}
          onError={() => setImageError(true)}
          className={imageError ? "error-image" : ""}
        />
      </div>
      <div className="cart-info">
        <p className="name">{item.name}</p>
        <p className="price">${(item.price * item.quantity).toFixed(2)}</p>
        <p className="quantity">{item.quantity}</p>
        <div className="buttons">
          <button
            className="decrease-button"
            onClick={() => handleRemoveCart(item)}>
            -
          </button>
          <button
            className="increase-button"
            onClick={() => handleAddItem(item)}>
            +
          </button>
          <button
            className="remove-button"
            onClick={() => handleRemoveItem(item)}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
