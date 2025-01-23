import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import cartContext from "../contexts/cartContext";
import Cart from "./Cart";

const Nav = () => {
  const { cart, setCart } = useContext(cartContext);
  const cartRef = useRef();
  const toggleCart = () => {
    if (cartRef.current.firstChild.style.display === "none") {
      cartRef.current.firstChild.style.display = "block";
      document.body.style.overflowY = "hidden";
    } else {
      cartRef.current.firstChild.style.display = "none";
      document.body.style.overflowY = "scroll";
    }
  };

  return (
    <>
      <nav className="py-1 px-2 f-1">
        <ul className="g-1">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          {/* <li>
            <NavLink to="/account">Account</NavLink>
          </li> */}
        </ul>
        <button onClick={toggleCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFF"
          >
            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
          </svg>
          <p>
            {cart.length
              ? cart.reduce((sum, item) => sum + item.quantity, 0)
              : 0}
          </p>
        </button>
      </nav>
      <div ref={cartRef} >
        <Cart />
      </div>
    </>
  );
};

export default Nav;
