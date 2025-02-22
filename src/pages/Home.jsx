import Hero from "../components/Hero.jsx";
import Column from "../components/Column.jsx";
import { useEffect, useContext } from "react";
import { cartContext } from "../contexts/CartContextProvider.jsx";

const Home = () => {
  const { setProducts } = useContext(cartContext);

  return (
    <div className="home">
      <Hero />
      <Column />
    </div>
  );
};

export default Home;
