import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "../public/data/products.json";

function App() {
  return (
    <>
      <Header data={data} />
      <Routes>
        <Route path="" Component={Home} />
        <Route path="/product/:id" Component={Product} />
        <Route path="*" Component={NoPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
