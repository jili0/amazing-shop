import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "../pages/Layout.jsx";
import Home from "../pages/Home.jsx";
import Products from "../pages/Products.jsx";
import CustomerService from "../pages/CustomerService.jsx";
import Account from "../pages/Account.jsx";
import Cart from "../pages/Cart.jsx";
import Login from "../pages/Login.jsx";
import Orders from "../pages/Orders.jsx";
import SingleProduct from "../pages/SingleProduct.jsx";
import NotFound from "../pages/NotFound.jsx";

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<Products />} />
      <Route path="/products/:category/:id" element={<SingleProduct />} />
      <Route path="/support" element={<CustomerService />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/account/login" element={<Login />} />
      <Route path="/account/orders" element={<Orders />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default AppRouter;
