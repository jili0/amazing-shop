import { NavLink } from "react-router-dom";
import column_top from "../assets/column_top.png";
import phone_screen from "../assets/phone_screen.png";
import category_jewelry from "../assets/category_jewelry.png";
import category_electronics from "../assets/category_electronics.png";
import CategoryCard from "./CategoryCard.jsx";


const Column = () => {
  return (
    <div className="column">
      <div className="column-yellow">
        <div className="column-yellow-top">
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512.448438 0.001051a362.812213 362.812213 0 0 0-214.675567 655.933663v245.143387a20.662086 20.662086 0 0 0 20.311881 20.662086h385.225323a20.662086 20.662086 0 0 0 20.311881-20.662086v-245.143387A362.812213 362.812213 0 0 0 512.448438 0.001051z m173.00119 881.46558H339.447247v-128.875381h346.002381z m9.105326-251.09687a19.961676 19.961676 0 0 0-8.755121 18.560856 14.358398 14.358398 0 0 0 0 3.852254v60.935642H339.447247v-62.686667a7.004097 7.004097 0 0 0 0-2.451433 19.961676 19.961676 0 0 0-8.404916-19.961676 322.188452 322.188452 0 1 1 363.862828 0z"
              fill="gold"
            ></path>
            <path
              d="M702.259461 263.705294a19.961676 19.961676 0 0 0-27.666183 7.354302l-70.040968 122.221489-70.040967-122.221489v-1.751024H511.748028v1.751024l-70.040968 122.221489-70.040968-122.221489a20.662086 20.662086 0 0 0-28.016387-7.354302 19.961676 19.961676 0 0 0-7.354301 27.666183l88.251619 152.68931a20.311881 20.311881 0 0 0 35.020484 0l70.040968-122.221489 70.040968 122.221489a20.311881 20.311881 0 0 0 35.020484 0l87.901414-152.68931a19.961676 19.961676 0 0 0-20.31188-27.666183zM692.10352 983.376239H346.451344a20.311881 20.311881 0 1 0 0 40.623761h345.652176a20.311881 20.311881 0 1 0 0-40.623761z"
              fill="gold"
            ></path>
          </svg>
          <div></div>
          <img width="150" src={column_top} alt="a man looking surprised" />
        </div>
        <div className="column-white">
          <div className="column-white-top">
            <NavLink to="/products/jewelry">
              <CategoryCard
                description="Jewelry"
                cover={category_jewelry}
              />
            </NavLink>
            <NavLink to="/products/electronics">
              <CategoryCard
                description="Electronics"
                cover={category_electronics}
              />
            </NavLink>
          </div>
          <div className="column-white-bottom">
            <div className="column-white-bottom-left">
              <p>Lorem ipsum dolor sit amet.</p>
              <div className="column-btns">
                <button>Apple Store</button>
                <button>Google Play</button>
              </div>
            </div>
            <img width="50" src={phone_screen} alt="phone screen" />
          </div>
        </div>
        <div className="column-yellow-bottom">
          <p className="column-yellow-bottom-title">
            Lorem ipsum dolor sit amet!
          </p>
          <p className="column-yellow-bottom-info">Lorem ipsum dolor</p>
          <input type="text" placeholder="Lorem ipsum dolor" />
        </div>
      </div>
    </div>
  );
};

export default Column;
