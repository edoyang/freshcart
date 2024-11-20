import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useState } from "react";

const PromoBanner = ({ title, banners }) => {
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => setDragging(true);
  const handleDragEnd = () => setDragging(false);

  const handleClick = (e) => {
    if (dragging) {
      e.preventDefault();
    }
  };

  const settings_promo = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="promo-banner">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="slider-container promotional">
        <Slider
          {...settings_promo}
          beforeChange={handleDragStart}
          afterChange={handleDragEnd}
        >
          {banners.map(({ banner, link }, index) => (
            <div key={index}>
              <Link to={link} onClick={handleClick}>
                <img src={banner} alt={`banner-${index}`} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PromoBanner;
