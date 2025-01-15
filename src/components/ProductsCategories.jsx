import { NavLink } from "react-router-dom";
import CategoryCard from "./CategoryCard.jsx";

const ProductsCategories = () => {
  return (
    <div className="products-categories">
      <NavLink to="/products/women">
        <CategoryCard
          description="Women"
          cover="/src/assets/category_women.png"
        />
      </NavLink>

      <NavLink to="/products/men">
        <CategoryCard description="Men" cover="/src/assets/category_man.png" />
      </NavLink>
      <NavLink to="/products/jewelry">
        <CategoryCard
          description="Jewelry"
          cover="/src/assets/category_jewelry.png"
        />
      </NavLink>
      <NavLink to="/products/electronics">
        <CategoryCard
          description="Electronics"
          cover="/src/assets/category_electronics.png"
        />
      </NavLink>
    </div>
  );
};

export default ProductsCategories;
