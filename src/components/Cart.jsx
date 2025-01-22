import { NavLink } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="cart p-3 m-2 g-2">
      <div className="cart-left">
        <NavLink>&lt; Continue Shopping</NavLink>
        <hr className="my-2" />
        <h2 className="f-2">Shopping Cart</h2>
        <p className="f-1">
          You have <span>3</span> item<span>s</span> in your cart
        </p>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-right my-3 p-2">
        <div className="cart-right-top mb-1">
          <h2 className="f-3">Card Details</h2>
          <img src="" alt="" />
        </div>
        <h3 className="f-2">Card type</h3>
        <div className="card-type-images g-1 my-2">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <h3 className="f-2">Name on card</h3>
        <input className="mb-1 f-1" type="text" placeholder="name" />
        <h3 className="f-2">Cart Number</h3>
        <input
          className="mb-1 f-1"
          type="text"
          placeholder="1111 2222 3333 4444"
        />
        <div className="half-width g-1 mb-2">
          <div>
            <h3 className="f-2">Expiration date</h3>
            <input className="mb-1 f-1" type="text" placeholder="mm/yy" />
          </div>
          <div>
            <h3 className="f-2">CVV</h3>
            <input className="mb-1 f-1" type="text" placeholder="123" />
          </div>
        </div>
        <div className="payment-info f-1 mb-1">
          <h3 className="f-2">Subtotal</h3>
          <p>
            <span>155</span> €
          </p>
        </div>
        <div className="payment-info f-1 mb-1">
          <h3 className="f-2">Shipping</h3>
          <p>
            <span>15</span> €
          </p>
        </div>
        <div className="payment-info f-1 mb-1">
          <h3 className="f-2">Total &#040;Tax incl.&#041;</h3>
          <p>
            <span>15</span> €
          </p>
        </div>
        <button className="py-2 px-3 my-2">
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
