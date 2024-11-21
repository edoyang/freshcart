import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.scss";
import "./hamburger.scss";
import Cart from "../Cart";

const Header = ({ data }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [imageErrors, setImageErrors] = useState({}); // Manage error state as an object
  const location = useSelector((state) => state.user.location);
  const user = useSelector((state) => state.user.user);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query) {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      setFilteredResults(results.slice(0, 3)); // Limit results to 3
    } else {
      setFilteredResults([]);
    }
  };

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true })); // Mark image as failed by its ID
  };

  return (
    <nav>
      <div className="top-header">
        <p>Delivery in 10 minutes</p>
        <div className="right">
          <Link to="location">
            <img src="icons/location.svg" alt="location" />
            <p>Deliver to {location || "41110"}</p>
          </Link>
          <Link to="order">
            <img src="icons/order.svg" alt="order" />
            <p>Track your order</p>
          </Link>
          <Link to="offer">
            <img src="icons/offer.svg" alt="offer" />
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
            <img src="logo.png" alt="logo" />
          </Link>
        </div>

        <div className="search">
          <img src="icons/search.svg" alt="search" />
          <input
            type="text"
            placeholder="Search for groceries, essentials and more ..."
            value={searchQuery}
            onChange={handleSearch}
          />
          {filteredResults.length > 0 && (
            <div className="result-container">
              {filteredResults.map((item) => (
                <Link
                  key={item.id}
                  className="result"
                  to={`/product/${item.id}`}
                >
                  <div className="image-container">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={() => handleImageError(item.id)}
                      className={imageErrors[item.id] ? "error-image" : ""}
                    />
                  </div>
                  <div className="info">
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="user-info">
          {user ? (
            <div className="login">
              <img src="icons/user.svg" alt="user" />
              <p>{user.name}</p>
            </div>
          ) : (
            <div className="login">
              <img src="icons/user.svg" alt="user" />
              <p>Login</p>
            </div>
          )}

          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Header;
