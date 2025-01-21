import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { useState } from "react";
import productsContext from "./contexts/productsContext";
import "./styles/styles.css";

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <productsContext.Provider value={{ products, setProducts }}>
      <RouterProvider router={AppRouter} />
    </productsContext.Provider>
  );
};

export default App;
