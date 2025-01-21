import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-left">
        <NavLink>&lt; Continue Shopping</NavLink>
        <h2>Shopping Cart</h2>
        <p>
          You have <span>3</span> item<span>s</span> in your cart
        </p>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-right">
        <div>
          <h2>Card Details</h2>
          <img src="" alt="" />
        </div>
        <h3>Card type</h3>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <h3>Name on card</h3>
        <input type="text" placeholder="name" />
        <h3>Cart Number</h3>
        <input type="text" placeholder="1111 2222 3333 4444" />
        <div>
          <div>
            <h3>Expiration date</h3>
            <input type="text" placeholder="mm/yy" />
          </div>
          <div>
            <h3>CVV</h3>
            <input type="text" placeholder="123" />
          </div>
        </div>
        <div>
          <h3>Subtotal</h3>
          <p>
            <span>155</span> €
          </p>
        </div>
        <div>
          <h3>Shipping</h3>
          <p>
            <span>15</span> €
          </p>
        </div>
        <div>
          <h3>Total &#040;Tax incl.&#041;</h3>
          <p>
            <span>15</span> €
          </p>
        </div>
        <button>
          <p>
            <span>170</span> €
          </p>
          <p>Checkout &rarr;</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
