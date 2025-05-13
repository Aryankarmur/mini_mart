import { useState } from "react";
import "/src/assets/css/Cartcard.css";

const CartCard = ({handelchiledData}) => {
  const [qnty, setQnty] = useState(1);
  const price = 1000;
  const [subtotal, setSubtotal] = useState(price);
  
    handelchiledData(subtotal)

  
  const handelDecrement = () => {
    if (qnty > 1) {
      setSubtotal(price * qnty);
      setQnty(qnty - 1);
      setSubtotal(price * (qnty - 1));
    }
  };

  const handelIncrement = () => {
    if (qnty > 0) {
      setSubtotal(price * qnty);
      setQnty(qnty + 1);
      setSubtotal(price * (qnty + 1));
    }
  };

  return (
    <div className="main-cart-card">
      <div className="prdct-img">
        <img src="src\assets\images\miniflowers.jpg" alt="" />
      </div>
      <div className="prdct-detaile">
        <h4 className="prdct-title">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, rem.
        </h4>
        <p className="prdct-price">₹{price}</p>
        <div className="incri-decri">
          <button className="decrement" onClick={handelDecrement}>
            –
          </button>
          <input type="number" disabled value={qnty} />
          <button className="increment" onClick={handelIncrement}>
            +
          </button>
        </div>
      </div>
      <div className="subtotal">₹{subtotal}</div>
    </div>
  );
};


export default CartCard;
