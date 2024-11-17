import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NoPage from "./pages/NoPage";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" Component={Home} />
        <Route path="/product/:id" Component={Product} />
        <Route path="*" Component={NoPage} />
      </Routes>
    </>
  );
}

export default App;
