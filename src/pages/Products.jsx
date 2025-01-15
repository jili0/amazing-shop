import { useContext } from "react";
import { useParams } from "react-router-dom";

import productsContext from "../contexts/productsContext";
import ProductsCategories from "../components/ProductsCategories";
import SingleCategory from "../components/SingleCategory";

const Products = () => {
  const { products } = useContext(productsContext);
  const categoryParam = useParams();
  const category = categoryParam.category;
  return (
    <>
      <ProductsCategories />
      {category ? <SingleCategory category={category} /> : ""}
    </>
  );
};

export default Products;
