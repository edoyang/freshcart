import { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./style.scss";
import Card from "../Card";

const SliderDesktop = ({ data, limit }) => {
  const displayLimit = limit || 5;

  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    beforeChange: (current, next) => {
      const slides = document.querySelectorAll(".slick-slide");
      slides.forEach((slide, index) => {
        if (index === next) {
          slide.removeAttribute("inert");
        } else {
          slide.setAttribute("inert", "true");
        }
      });
    },
  };

  useEffect(() => {
    // Initialize the `inert` attribute for inactive slides
    const slides = document.querySelectorAll(".slick-slide");
    slides.forEach((slide, index) => {
      if (index !== 0) {
        slide.setAttribute("inert", "true");
      }
    });
  }, []);

  return (
    <div className="slider-desktop">
      <Slider {...settings}>
        {data.slice(0, displayLimit).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            original_price={item.original_price}
            promo={item.promo}
            bonus={item.bonus}
            style={{ width: 250 }}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderDesktop;
