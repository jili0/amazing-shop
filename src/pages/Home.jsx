import Hero from "../components/Hero.jsx";
import Column from "../components/Column.jsx";
import { useEffect, useContext } from "react";
import productsContext from "../contexts/productsContext.jsx";


const Home = () => {
  const {products, setProducts} = useContext(productsContext)
  useEffect(() => {
    const fetchProducts = async () => {
      const url = "https://fakestoreapi.com/products";
      /*


      https://fakestoreapi.com/docs


      
{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}
*/
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
