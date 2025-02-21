import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import { CartContextProvider } from "./contexts/CartContextProvider";
import "./styles/styles.css";

const App = () => {
  return (
    <CartContextProvider>
      <RouterProvider router={AppRouter} />
    </CartContextProvider>
  );
};

export default App;
