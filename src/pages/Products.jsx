import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";

import ProductsCategories from "../components/ProductsCategories";
import SingleCategory from "../components/SingleCategory";
import About from "../components/About";
import productsContext from "../contexts/productsContext";

const Products = () => {
  const categoryParam = useParams();
  const category = categoryParam.category;
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
  return (
    <>
      <ProductsCategories />
      {category ? <SingleCategory category={category} /> : <About />}
    </>
  );
};

export default Products;
