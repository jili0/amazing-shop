import { useParams, NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartContext } from "../contexts/CartContextProvider.jsx";
import { addToCart } from "../stores/cart.js";

const Product = () => {
  const productParam = useParams();
  const { products, setCart } = useContext(cartContext);

  const filteredProduct = products.filter(
    (product) => product.id === Number(productParam.id)
  )[0];

  let categoryName;
  switch (productParam.category) {
    case "women's clothing":
      categoryName = "women";
      break;
    case "men's clothing":
      categoryName = "men";
      break;
    case "jewelery":
      categoryName = "jewelry";
      break;
    case "electronics":
      categoryName = "electronics";
      break;
  }
  filteredProduct &&
    document.body.style.setProperty("--rate", filteredProduct.rating.rate);
  if (!filteredProduct) {
    return "Loading...";
  }

  const handleAddToCart = () => {
    setCart((cart) => {
      if (cart.some((item) => item.productId === filteredProduct.id)) {
        return cart.map((item) =>
          item.productId === filteredProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...cart, { productId: filteredProduct.id, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <p className="my-2">
        <NavLink to="/products" className="link">
          Products
        </NavLink>
        &nbsp;&gt;&nbsp;
        <NavLink to={`/products/${categoryName}`} className="link">
          {categoryName}
        </NavLink>
      </p>
      <div className="product m-1 p-1">
        <div className="product-top g-2 p-3">
          <img
            src={filteredProduct.image}
            alt={filteredProduct.title}
            width="150"
            className="w-3 p-1"
          />
          <div className="product-short-info mx-1">
            <p className="title mb-1 f-3">{filteredProduct.title}</p>
            <p className="rate mb-2">
              <span className="rating-stars">☆☆☆☆☆</span>
              {filteredProduct.rating.rate}
              &nbsp; ({filteredProduct.rating.count})
            </p>

            <p className="price f-3 px-2">{filteredProduct.price} €</p>
            <button className="addToCartBtn p-1 mt-1" onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
        <div className="product-bottom px-3 my-3 py-2">
          <p className="product-description mb-3">
            {filteredProduct.description}
          </p>
          <p className="product-category px-1">
            Category: {filteredProduct.category}
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
