import { useContext } from "react";
import productsContext from "../contexts/productsContext";
import CategoryCard from "./CategoryCard.jsx"

const SingleCategory = ({ category }) => {
  const { products } = useContext(productsContext);
  let categoryName;
  switch (category) {
    case "women":
      categoryName = "women's clothing";
      break;
    case "men":
      categoryName = "men's clothing";
      break;
    case "jewelry":
      categoryName = "jewelery"
      break;
    case "electronics":
      categoryName = "electronics";
      break;
  }
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );
  console.log(filteredProducts)
  return (
    <div className="single-category">
      <p className="my-2" >Products &gt; {category}</p>
      <ul className="products-container">
        {filteredProducts ? filteredProducts.map(product => <CategoryCard title={product.title} cover={product.image}/>) : "Loading..."}
      </ul>
    </div>
  );
};

export default SingleCategory;
