const CartItem = () => {
  return (
    <div className="cart-item my-1 py-1 px-2 g-1">
      <img src="" alt="" className="m-1" />
      <div>
        <h3 className="f-2">Italy Pizza</h3>
        <p className="f-1">Extra cheese and topping</p>
      </div>
      <div className="amount">
        <span>1</span>
        <div>
          <button>
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
          <button>
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
        <span>81</span> €
      </p>
      <button>
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
