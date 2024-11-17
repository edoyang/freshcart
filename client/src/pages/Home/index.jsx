import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CarouselSection from "../../components/CarouselSection";
import data from "../../../public/data/products.json";

const Home = () => {
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    swipeToSlide: true,
    arrows: false,
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

  const fruitData = data.filter((item) => item.type === "fruit");

  return (
    <section className="home-page">
      <div className="hero">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img src="banner/banner1.jpg" alt="hero1" />
            </div>
            <div>
              <img src="banner/banner1.jpg" alt="hero1" />
            </div>
          </Slider>
        </div>
      </div>

      <CarouselSection data={data} title={"Check Our Top Sale"} />

      <CarouselSection data={fruitData} title={"Browse The FRESH"} />

      <div className="promo-banner">
        <div className="title">
          <h1>Featured Brands</h1>
        </div>
        <div className="slider-container promotional">
          <Slider {...settings_promo}>
            <Link>
              <img src="banner/offer1.png" alt="promo1" />
            </Link>
            <Link>
              <img src="banner/offer2.png" alt="promo2" />
            </Link>
            <Link>
              <img src="banner/offer3.png" alt="promo3" />
            </Link>
          </Slider>
        </div>
      </div>

      <h1>Home</h1>
    </section>
  );
};

export default Home;
