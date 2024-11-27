import "./style.scss";

const Footer = () => {
  return (
    <footer>
      <div className="main-content">
        <div className="logo">
          <img src="logo.png" alt="logo-freshcart" />
        </div>

        <div className="contact-us">
          <h3>Contact Us</h3>
          <div className="contacts">
            <div className="contact">
              <img src="icons/whatsapp.svg" alt="phone" />
              <p>+1 234 567 890</p>
            </div>
            <div className="contact">
              <img src="icons/call.svg" alt="email" />
              <p>+1 234 567 890</p>
            </div>
          </div>
        </div>

        <div className="social">
          <h3>Follow Us</h3>
          <div className="icons">
            <img src="icons/instagram.svg" alt="instagram" />
            <img src="icons/facebook.svg" alt="facebook" />
            <img src="icons/youtube.svg" alt="youtube" />
          </div>
        </div>
      </div>

      <div className="tab">
        <h1>Popular Categories</h1>
        <div className="categories">
          <p>Fruits & Vegetables</p>
          <p>Dairy</p>
          <p>Meat</p>
          <p>Seafood</p>
          <p>Bath and Body</p>
          <p>Snacks and Munchies</p>
          <p>Drinks</p>
        </div>
      </div>

      <div className="tab">
        <h1>Customer Services</h1>
        <div className="categories">
          <p>About Us</p>
          <p>Terms and Conditions</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>E-Waste Policy</p>
          <p>Cancellation & Return Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
