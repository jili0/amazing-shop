import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import productsContext from "../contexts/productsContext";
import Card from "./Card.jsx";

const SingleCategory = ({ category }) => {
  const { products, setProducts } = useContext(productsContext);
  if (!products.length) {
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
  }
  let categoryName;
  switch (category) {
    case "women":
      categoryName = "women's clothing";
      break;
    case "men":
      categoryName = "men's clothing";
      break;
    case "jewelry":
      categoryName = "jewelery";
      break;
    case "electronics":
      categoryName = "electronics";
      break;
  }
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );
  return (
    <div className="single-category">
      <p className="my-2">
        <NavLink to="/products" className="link">
          Products
        </NavLink>
        &nbsp;&gt;&nbsp;
        <NavLink to={`/products/${category}`} className="link">
          {category}
        </NavLink>
      </p>
      <ul className="products-container">
        {filteredProducts
          ? filteredProducts.map((product) => (
              <NavLink
                to={`/products/${product.category}/${product.id}`}
                key={product.id}
              >
                <Card title={product.title} cover={product.image} />
              </NavLink>
            ))
          : "Loading..."}
      </ul>
    </div>
  );
};

export default SingleCategory;
