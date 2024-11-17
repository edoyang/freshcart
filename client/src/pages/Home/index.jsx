import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CarouselSection from "../../components/CarouselSection";

const Home = () => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
  };

  return (
    <div className="home-page">
      <div className="hero">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src="src/assets/banner/banner1.jpg" alt="hero1" />
            </div>
            <div>
              <img src="src/assets/banner/banner1.jpg" alt="hero1" />
            </div>
          </Slider>
        </div>
      </div>

      <CarouselSection />

      <h1>Home</h1>
    </div>
  );
};

export default Home;
