import { Link } from "react-router-dom";
import Card from "../Card";
import "./style.scss";

const CarouselSection = ({ data, title, highlight }) => {
  return (
    <div className="carousel-section">
      <div className="title">
        <h1>
          {title}
          <p>{highlight}</p>
        </h1>
        <Link to="category/fruit"> View All </Link>
      </div>

      <div className="carousel">
        {data.slice(0, 5).map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
            original_price={item.original_price}
            promo={item.promo}
            bonus={item.bonus}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSection;
