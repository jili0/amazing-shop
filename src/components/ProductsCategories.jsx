import { NavLink } from "react-router-dom";
import CategoryCard from "./CategoryCard.jsx";
import category_women from "../assets/category_women.png";
import category_men from "../assets/category_men.png";
import category_jewelry from "../assets/category_jewelry.png";
import category_electronics from "../assets/category_others.png";

const ProductsCategories = () => {
  return (
    <div className="products-categories">
      <NavLink to="/products/women">
        <CategoryCard description="Women" cover={category_women} />
      </NavLink>

      <NavLink to="/products/men">
        <CategoryCard description="Men" cover={category_men} />
      </NavLink>
      <NavLink to="/products/jewelry">
        <CategoryCard description="Jewelry" cover={category_jewelry} />
      </NavLink>
      <NavLink to="/products/electronics">
        <CategoryCard description="Electronics" cover={category_electronics} />
      </NavLink>
    </div>
  );
};

export default ProductsCategories;
