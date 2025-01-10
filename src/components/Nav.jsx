import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <nav>
      <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/support">Customer Service</NavLink>
          </li>
          <li>
            <NavLink to="/account">Account</NavLink>
          </li>
        </ul>
    </nav>
  )
}

export default Nav
