import { useRef, useContext } from "react";
import CartItem from "./CartItem";
import cartContext from "../contexts/cartContext";
import productsContext from "../contexts/productsContext";

const Cart = () => {
  const cartRef = useRef();
  const hideCart = () => {
    cartRef.current.style.width = "0";
    cartRef.current.style.boxShadow = "none";
    cartRef.current.style.padding = "0";
    document.body.style.overflowY = "scroll";
  };
  const { cart } = useContext(cartContext);
  const { products } = useContext(productsContext);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartDetails = cart.map((item) => {
    const itemDetails = products.filter(
      (product) => product.id === item.productId
    )[0];
    const itemQuantity = item.quantity;
    return { itemDetails, itemQuantity };
  });

  return (
    <div
      className="cart p-3 my-1 g-2"
      ref={cartRef}
      style={{
        height: "0",
        width: "0",
        padding: "0",
        right: "0",
        boxShadow: "none",
      }}
    >
      <div className="cart-left my-3 p-2">
        <p onClick={hideCart}>&lt; Continue Shopping</p>
        <hr className="my-2" />
        <h2 className="f-2">Shopping Cart</h2>
        <p className="f-1">
          You have <span>{totalItems}</span> item<span>s</span> in your cart
        </p>
        {cartDetails.map((item) => (
          <CartItem product={item.itemDetails} quantity={item.itemQuantity} />
        ))}
      </div>
      <div className="cart-right my-3 p-2">
        <div className="cart-right-top mb-1">
          <h2 className="f-3">Card Details</h2>
          <img
            src="https://d1jj76g3lut4fe.cloudfront.net/processed/thumb/S1Yc7F14OY0nt2uB50.png?Expires=1737208036&Signature=Gf-1-KYX70kjqru4Z~cu9xs8lhb2RR~vbe9RssVqmYMV8GmLz2C-TQTazIoYbYdDfvwqKtjKRpeUDWSnbEShTG6SaERbh7KyrfMRhqXYtr3SNTSYxCSgwd3Ag5-Jy-oP90sb13Qb84hHGI5GJGn-vGtUxzuKymiYdAJ9MG2SrmcYfNF6t2ggNJMTPwsZ95mF3BLhPsA5pqsXjA5Fv8TTMkE-kvUagWSdti-EzBAeFbf8K5ZIiReMPOfZT0Hx3Mr7CA~QHIigKKw1x9uCZSs6SNwF9ercMFjNdADp8WBwmcsxCcPACBVrkaN-qUgEed8JmQzGkqDBuqvMC2wG9g6jVg__&Key-Pair-Id=K2YEDJLVZ3XRI"
            alt="profile"
          />
        </div>
        <h3 className="f-2">Card type</h3>
        <div className="card-type-images g-1 my-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png"
            alt="mastercard logo"
          />
          <img
            src="https://www.svgrepo.com/show/328144/visa.svg"
            alt="visacard logo"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/59/RuPay_logo.svg"
            alt="rupay logo"
          />
          <p>See All</p>
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
            <span>
              {totalItems
                ? cartDetails.reduce(
                    (sum, item) => sum + item.itemDetails.price * 100,
                    0
                  ) / 100
                : 0}
            </span>
            &nbsp; €
          </p>
        </div>
        <div className="payment-info f-1 mb-1">
          <h3 className="f-2">Shipping</h3>
          <p>
            <span>{totalItems ? 9 : 0}</span> €
          </p>
        </div>
        <div className="payment-info f-1 mb-1">
          <h3 className="f-2">Total &#040;Tax incl.&#041;</h3>
          <p>
            <span>
              {totalItems
                ? cartDetails.reduce(
                    (sum, item) => sum + item.itemDetails.price * 100,
                    0
                  ) /
                    100 +
                  9
                : 0}
            </span>
            &nbsp; €
          </p>
        </div>
        <button className="py-2 px-3 my-2">
          <p>
            <span>
              {totalItems
                ? cartDetails.reduce(
                    (sum, item) => sum + item.itemDetails.price,
                    0
                  ) + 9
                : 0}
            </span>
            &nbsp; €
          </p>
          <p>Checkout &rarr;</p>
        </button>
      </div>
    </div>
  );
};

export default Cart;
