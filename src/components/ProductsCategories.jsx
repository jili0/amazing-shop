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
        <CategoryCard title="Women" cover={category_women} />
      </NavLink>

      <NavLink to="/products/men">
        <CategoryCard title="Men" cover={category_men} />
      </NavLink>
      <NavLink to="/products/jewelry">
        <CategoryCard title="Jewelry" cover={category_jewelry} />
      </NavLink>
      <NavLink to="/products/electronics">
        <CategoryCard title="Electronics" cover={category_electronics} />
      </NavLink>
    </div>
  );
};

export default ProductsCategories;
