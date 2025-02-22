import column_top from "../assets/column_top.png";
import phone_screen from "../assets/phone_screen.png";
import Card from "./Card.jsx";

const Column = () => {
  return (
    <div className="column m-2 py-2">
      <div className="column-top">
        <div>
          <svg
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4"
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
        </div>
        <img
          className="h-6 mr-2"
          src={column_top}
          alt="a man looking surprised"
        />
      </div>

      <div className="column-middle py-4 px-2">
        <div className="column-middle-cards mb-2 gx-2 gy-4">
          <Card cover="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title={"Production"}/>
          <Card cover="https://images.unsplash.com/photo-1524404794194-16bae22718c0?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title={"Textilien"}/>
        </div>
        <div className="column-middle-info px-2 py-4 g-1">
          <div className="g-2">
            <p className="f-2">Lorem ipsum dolor sit amet.</p>
            <button className="px-1 f-1">Apple Store</button>
            <button className="px-1 f-1">Google Play</button>
          </div>
          <img
            width="150"
            className="p-1"
            src={phone_screen}
            alt="phone screen"
          />
        </div>
      </div>

      <div className="column-bottom px-3 py-5">
        <p>Lorem ipsum dolor sit amet!</p>
        <p>Lorem ipsum dolor</p>
        <input
          className="m-1 px-1 f-1"
          type="text"
          placeholder="Lorem ipsum dolor"
        />
      </div>
    </div>
  );
};

export default Column;
