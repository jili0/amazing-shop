import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../contexts/CartContextProvider.jsx";
import Card from "./Card.jsx";

const SingleCategory = ({ category }) => {
  const { products } = useContext(cartContext);
 
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
      <ul className="products-container px-2 py-4 gx-2 gy-4">
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
