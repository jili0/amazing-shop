import { useParams, NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import productsContext from "../contexts/productsContext";

const SingleProduct = () => {
  const productParam = useParams();
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
  const filteredProduct = products.filter(
    (product) => product.id === Number(productParam.id)
  )[0];
  filteredProduct &&
    document.body.style.setProperty("--rate", filteredProduct.rating.rate);
  if (!filteredProduct) {
    return "Loading...";
  }
  return (
    <>
      <p className="my-2">
        <NavLink to="/products" className="link">
          Products
        </NavLink>
        &nbsp;&gt;&nbsp;
        <NavLink to={`/products/${filteredProduct.category}`} className="link">
          {filteredProduct.category}
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
            <p className="title mb-1">{filteredProduct.title}</p>
            <p className="rate mb-2">
              <span className="rating-stars">
                ☆☆☆☆☆ {filteredProduct.rating.rate}{" "}
              </span>
              &nbsp; ({filteredProduct.rating.count})
            </p>

            <p className="price">{filteredProduct.price} €</p>
            <button className="addToCartBtn p-1 mt-1">Add to cart</button>
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

export default SingleProduct;
