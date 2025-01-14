import hero from "../assets/hero.png";
import logo_amazon from "../assets/logo_amazon.svg";
import logo_hm from "../assets/logo_hm.png";
import logo_lacoste from "../assets/logo_lacoste.png";
import logo_levis from "../assets/logo_levis.png";
import logo_obey from "../assets/logo_obey.svg";
import logo_shopify from "../assets/logo_shopify.svg";

import ProductCard from "./ProductCard.jsx";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-top">
        <div>
          <div className="hero-top-box"></div>
          <div className="hero-top-box"></div>
          <div className="hero-top-info">
            <p>Live for innovative fashion!</p>
            <button>SHOP NOW</button>
          </div>
        </div>
        <img
          src={hero}
          alt="red jackets with pants and hand bag in the same color"
        />
      </div>
      <div className="hero-middle">
        <img height="30" src={logo_amazon} alt="logo_amazon" />
        <img height="30" src={logo_hm} alt="logo_hm" />
        <img height="30" src={logo_lacoste} alt="logo_lacoste" />
        <img height="30" src={logo_levis} alt="logo_levis" />
        <img height="30" src={logo_obey} alt="logo_obey" />
        <img height="30" src={logo_shopify} alt="logo_shopify" />
      </div>
      <div className="hero-bottom">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Hero;
