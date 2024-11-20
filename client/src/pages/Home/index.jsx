import "./style.scss";
import { useEffect, useState } from "react";
import CarouselSection from "../../components/CarouselSection";
import Hero from "../../components/Hero";
import PromoBanner from "../../components/PromoBanner";
import dummyData from "../../../public/data/products.json"; // Dummy data

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const HeroImages = ["banner/banner1.jpg", "banner/banner1.jpg"];
  const banners = [
    { banner: "banner/offer1.png", link: "/products" },
    { banner: "banner/offer2.png", link: "/products" },
    { banner: "banner/offer3.png", link: "/products" },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_BACKEND_API}/products`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching products, using dummy data:", error);
        setData(dummyData);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const fruitData = data.filter((item) => item.type === "fruit");
  const drinkData = data.filter((item) => item.type === "drink");
  const snackData = data.filter((item) => item.type === "snack");
  const discountData = data.filter(
    (item) => item.original_price / item.price > 1.5
  );

  if (loading) return <div>Loading...</div>;

  return (
    <section className="home-page">
      <Hero HeroImages={HeroImages} />

      <CarouselSection data={data} title={"Check Our"} highlight={"Top Sale"} />
      <CarouselSection
        data={discountData}
        title={"Supersaver "}
        highlight={"Up to 50% OFF !"}
      />
      <CarouselSection data={fruitData} title={"Browse The FRESH"} />

      <PromoBanner title={"Featured Item"} banners={banners} />

      <CarouselSection data={drinkData} title={"Thirsty? Grab a Drink"} />
      <CarouselSection data={snackData} title={"Snack Time"} />
    </section>
  );
};

export default Home;
