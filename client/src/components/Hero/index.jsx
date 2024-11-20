import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Hero = ({ HeroImages }) => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
  };

  return (
    <div className="hero">
      <div className="slider-container">
        <Slider {...settings}>
          {HeroImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt="banner" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
