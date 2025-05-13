import "/src/assets/css/Paymentdetailes.css"
import { useState } from "react";

const PaymentDetailes = () => {
  const [data, setData] = useState("");

  const handelMethodChange = (e) => {
    const method = e.target.value;
    switch (method) {
      case "debit-card":
        setData(<> <div className="debit-card-main">
          <div className="own-cvv">
            <div className="owner">
            <label htmlFor="owner">Owner name</label>
            <input type="text" />
            </div>
            <div>
            <label htmlFor="cvv"> CVV</label>
            <input type="number" maxLength={1} />
            </div>
          </div>
          <div className="db-num">
            <label htmlFor="debit-number">Card Number </label>
            <input type="number" />
          </div>
          <div className="exp-img">
            <div className="exp-date">
              <label htmlFor="exp-date">Expiration Date</label>
              <input type="month" name="exp-date" id="exp-date" />
            </div>
            <div className="card-img">
              <img src="src\assets\images\debit card\visa.jpg" alt="" />
              <img src="src\assets\images\debit card\mastercard.jpg" alt="" />
              <img src="src\assets\images\debit card\amex.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="payment-btn">
        <button> Continue to Pay </button>
       </div></>);

        break;
      case "credit-card":
        setData(<> <div className="debit-card-main">
          <div className="own-cvv">
            <div className="credit-owner">
            <label htmlFor="owner">Owner name</label>
            <input type="text" />
            </div> 
          </div>
          <div className="db-num">
            <label htmlFor="debit-number">Card Number </label>
            <input type="number" />
          </div>
          <div className="exp-img">
            <div className="exp-date">
              <label htmlFor="exp-date">Expiration Date</label>
              <input type="month" name="exp-date" id="exp-date" />
            </div>
            <div className="card-img">
              <img src="src\assets\images\debit card\visa.jpg" alt="visa card image" />
              <img src="src\assets\images\debit card\mastercard.jpg" alt=" master card image" />
              <img src="src\assets\images\debit card\amex.jpg" alt=" amex card image" />
            </div>
          </div>
        </div>
        <div className="payment-btn">
        <button> Continue to Pay </button>
       </div></>)

        break;
      case "upi":
       setData(<><div className="main-upi">
        <label htmlFor="upiid">Enter Upi id</label>
        <input type="text" id="upiid" />
       </div>
         <div className="payment-btn">
         <button> Continue to Pay </button>
        </div></>
       )

        break;

      default:
        break;
    }
  };

  return (
    <div className="payment-detailes">
      <div className="sub-div">
        <h1>Payment Detailes</h1>
        <h2>Total Payment : ₹3645</h2>
        <div className="payment-method">
          <h3>Select payment method</h3>
          <div className="payment-method-div">
            <select
              name="payment-method"
              id="payment-mehtod"
              onChange={handelMethodChange}
            >
              <option hidden> Select Payment Method</option>
              <option value="debit-card"> Debite card</option>
              <option value="credit-card"> Credite card </option>
              <option value="upi"> UPI</option>
            </select>
          </div>
          <div>{data}</div>
          
        </div>
        
      </div>
    </div>
  );
};

export default PaymentDetailes;
