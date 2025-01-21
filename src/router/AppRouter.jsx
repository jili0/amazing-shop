import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "../pages/Layout.jsx";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import Support from "../pages/Support.jsx";
import Account from "../pages/Account.jsx";
import Login from "../pages/Login.jsx";
import Product from "../pages/Product.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/products/:category/:id" element={<Product />} />
      <Route path="/support" element={<Support />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default AppRouter;
