import Hero from "../components/Hero.jsx";
import Column from "../components/Column.jsx";
import { useEffect, useContext } from "react";
import { cartContext } from "../contexts/CartContextProvider.jsx";

const Home = () => {
  const { setProducts } = useContext(cartContext);
  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/products";
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Response is not ok");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="home">
      <Hero />
      <Column />
    </div>
  );
};

export default Home;
