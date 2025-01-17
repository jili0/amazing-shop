import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "./styles/styles.css";
import { useState } from "react";

import productsContext from "./contexts/productsContext";
import colorsContext from "./contexts/colorsContext";

const App = () => {
  const [products, setProducts] = useState([]);
  const colors = [
    "#4059ad",
    "#6b9ac4",
    "#97d8c4",
    "#eff2f1",
    "#90DCCD",
    "#90A9DC",
    "#C590DC",
    "#DC90BE",
  ];
  return (
    <productsContext.Provider value={{ products, setProducts }}>
      <colorsContext.Provider value={colors}>
        <RouterProvider router={AppRouter} />
      </colorsContext.Provider>
    </productsContext.Provider>
  );
};

export default App;
