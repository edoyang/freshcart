import { Link } from "react-router-dom";
import Card from "../Card";
import "./style.scss";

const CarouselSection = () => {
  const dummyData = [
    {
      objectId: "1",
      name: "Strwaberry 250 ",
      image: "assets/dummy/strawberry.jpg",
      price: 2,
      original_price: 5,
    },
    {
      objectId: "2",
      name: "Indomie Goreng 5pcs",
      image: "assets/dummy/indomie.png",
      price: 3,
      bonus: 5,
      original_price: 3,
    },
    {
      objectId: "3",
      name: "Apple 1kg",
      image: "assets/dummy/apple.jpg",
      price: 5,
      original_price: 5,
    },
    {
      objectId: "4",
      name: "Banana 1kg",
      image: "assets/dummy/banana.jpg",
      price: 2,
      original_price: 3,
    },
    {
      objectId: "5",
      name: "Orange 1kg",
      image: "assets/dummy/orange.jpg",
      price: 3,
      original_price: 3,
    },
  ];
  return (
    <div className="carousel-section">
      <div className="title">
        <h1>Shop from Top Categories</h1>
        <Link to="category/fruit"> View All </Link>
      </div>

      <div className="carousel">
        {dummyData.slice(0, 5).map((item) => (
          <Card
            key={item.objectId}
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
