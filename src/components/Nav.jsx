import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
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
        <li>
          <NavLink to="/account">Account</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
