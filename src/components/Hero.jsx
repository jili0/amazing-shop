import hero from "../assets/hero.png";
import logo_amazon from "../assets/logo_amazon.svg";
import logo_hm from "../assets/logo_hm.png";
import logo_lacoste from "../assets/logo_lacoste.png";
import logo_levis from "../assets/logo_levis.png";
import logo_obey from "../assets/logo_obey.svg";
import logo_shopify from "../assets/logo_shopify.svg";
import category_women from "../assets/category_women.png";
import category_men from "../assets/category_men.png";
import category_jewelry from "../assets/category_jewelry.png";
import category_electronics from "../assets/category_electronics.png";
import Card from "./Card.jsx";

import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero m-2 py-2">
      <div className="hero-top pt-4 px-2">
        <div className="hero-top-info pt-4 g-1">
          <p className="f-3">Live for innovative fashion!</p>
          <NavLink to="/products">
            <button className="mt-2 mb-3 py-1 px-2">SHOP NOW</button>
          </NavLink>
        </div>
        <img src={hero} alt="woman with hat" width="100" />
      </div>
      <div className="hero-middle h-2 p-1 g-2">
        <img
          height="100"
          src={logo_amazon}
          alt="logo_amazon"
          className="pt-1"
        />
        <img height="100" src={logo_hm} alt="logo_hm" />
        <img height="100" src={logo_lacoste} alt="logo_lacoste" />
        <img height="100" src={logo_levis} alt="logo_levis" />
        <img height="100" src={logo_obey} alt="logo_obey" />
        <img height="100" src={logo_shopify} alt="logo_shopify" />
      </div>
      <div className="hero-bottom px-2 py-4 gx-2 gy-4">
        <NavLink to="/products/women">
          <Card title="Women" cover={category_women} />
        </NavLink>
        <NavLink to="/products/men">
          <Card title="Men" cover={category_men} />
        </NavLink>
        <NavLink to="/products/jewelry">
          <Card title="Jewelry" cover={category_jewelry} />
        </NavLink>
        <NavLink to="/products/electronics">
          <Card title="Electronics" cover={category_electronics} />
        </NavLink>
        <NavLink to="/products/">
          <Card
            title="More"
            cover="https://images.unsplash.com/photo-1482398650355-d4c6462afa0e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
