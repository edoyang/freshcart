import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import "./hamburger.scss";

const Header = () => {
  const location = useSelector((state) => state.user.location);
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <nav>
      <div className="top-header">
        <p>Delivery in 10 minutes</p>
        <div className="right">
          <Link to="location">
            <img src="assets/icons/location.svg" alt="location" />
            <p>Deliver to {location || "41110"}</p>
          </Link>
          <Link to="order">
            <img src="assets/icons/order.svg" alt="order" />
            <p>Track your order</p>
          </Link>
          <Link to="offer">
            <img src="assets/icons/offer.svg" alt="offer" />
            <p>Offers</p>
          </Link>
        </div>
      </div>

      <div className="header">
        <div className="logo">
          <label htmlFor="hamburger" className="hamburger">
            <input type="checkbox" id="hamburger" name="hamburger" />
          </label>

          <div className="menu">
            <Link to="category/fruit">Fruits</Link>
            <Link to="category/vegetable">Vegetables</Link>
            <Link to="category/dairy">Dairy</Link>
            <Link to="category/seafood">Seafood</Link>
            <Link to="category/meat">Meat</Link>
            <Link to="category/snacks">Snacks</Link>
            <Link to="category/beverages">Beverages</Link>
            <Link to="category/other">Other</Link>
          </div>
          <Link to="/">
            <img src="assets/logo.png" alt="logo" />
          </Link>
        </div>

        <div className="search">
          <img src="assets/icons/search.svg" alt="search" />
          <input
            type="text"
            placeholder="Search for groceries, essentials and more ..."
          />
        </div>

        <div className="user-info">
          {user ? (
            <div className="login">
              <img src="assets/icons/user.svg" alt="user" />
              <p>{user.name}</p>
            </div>
          ) : (
            <Link className="login" to="login">
              <img src="assets/icons/user.svg" alt="user" />
              <p>Login</p>
            </Link>
          )}

          {cart.length > 0 ? (
            <div className="cart">
              <img src="assets/icons/cart.svg" alt="cart" />
              <p>{cart.length}</p>
            </div>
          ) : (
            <Link className="cart" to="cart">
              <img src="assets/icons/cart.svg" alt="cart" />
              <p>Cart</p>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
