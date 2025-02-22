import { cartContext } from "../contexts/CartContextProvider.jsx";
import { useContext } from "react";

const CartItem = ({ product, quantity }) => {
  const { id, description, image, price, title } = product;
  const { setCart } = useContext(cartContext);

  const increaseQuantity = () => {
    setCart((cart) => {
      return cart.map((item) =>
        item.productId === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  };
  const decreaseQuantity = () => {
    setCart((cart) => {
      return cart.map((item) =>
        item.productId === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };
  const handleRemove = () => {
    setCart((cart) => cart.filter((item) => item.productId !== id));
  };

  return (
    <div className="cart-item my-1 py-1 px-2 g-1">
      <img src={image} alt={title} className="m-1" />
      <div>
        <h3 className="f-2">{title.slice(0, 35)} ...</h3>
        <p className="f-1">{description.slice(0, 50)} ...</p>
      </div>
      <div className="amount">
        <span>{quantity}</span>
        <div>
          <button onClick={increaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="300 -680 360 180"
              fill="#FFF"
              height="20"
              width="20"
            >
              <path d="m280-400 200-200 200 200H280Z" />
            </svg>
          </button>
          <button onClick={decreaseQuantity}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="300 -460 360 180"
              height="20"
              width="20"
              fill="#FFF"
            >
              <path d="M480-360 280-560h400L480-360Z" />
            </svg>
          </button>
        </div>
      </div>
      <p className="nowrap">
        <span>{price}</span> €
      </p>
      <button onClick={handleRemove}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFF"
        >
          <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
