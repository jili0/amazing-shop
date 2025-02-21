import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </cartContext.Provider>
  );
};
