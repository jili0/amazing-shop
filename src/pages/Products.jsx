import { useParams } from "react-router-dom";
import ProductsCategories from "../components/ProductsCategories";
import SingleCategory from "../components/SingleCategory";
import About from "../components/About";

const Products = () => {
  const categoryParam = useParams();
  const category = categoryParam.category;
  return (
    <>
      <ProductsCategories />
      {category ? <SingleCategory category={category} /> : <About />}
    </>
  );
};

export default Products;
