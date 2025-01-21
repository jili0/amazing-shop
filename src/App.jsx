import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { useState } from "react";
import productsContext from "./contexts/productsContext";
import cartContext from "./contexts/cartContext";
import "./styles/styles.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      <cartContext.Provider value={{ cart, setCart }}>
        <RouterProvider router={AppRouter} />
      </cartContext.Provider>
    </productsContext.Provider>
  );
};

export default App;
