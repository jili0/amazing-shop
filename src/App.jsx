import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import "./styles/app.css";
import { useState } from "react";

import productsContext from "./contexts/productsContext";
import colorsContext from "./contexts/colorsContext";

const App = () => {
  const [products, setProducts] = useState([]);
  const colors = [
    "#8ECDE2",
    "#D4DC90",
    "#DCC790",
    "#DCA590",
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
