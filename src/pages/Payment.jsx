import { useEffect, useState } from "react";
import "../css/Payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [cart, setCart] = useState([]);
  const [method, setMethod] = useState();
  const navigate = useNavigate();

  // user detailes
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // cart products
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  // filter products from cartitems
  const usersProductList = cartItems.filter(
    (product) => product.username === user.username
  );

  useEffect(() => {
    setCart(usersProductList);
  }, []);

  // get final total of cart
  const finalTotal = cart.reduce((total, item) => {
    return Math.round(total + item.price * item.quantity);
  }, 0);

  const handelMethod = (e) => {
    setMethod(e.target.value);
  };
  const selectedMethod = () => {
    switch (method) {
      case "debitcard":
        return (
          <>
            <div className="method-main">
              <input type="text" name="cardname" value={"debitcard"} hidden />
              <div>
                <label htmlFor="name">Owner </label>
                <input type="text" name="name" id="name" required />
              </div>
              <div>
                <label htmlFor="cvv">CVV </label>
                <input type="number" name="cvv" id="cvv" required />
              </div>
              <div>
                <label htmlFor="number">Card Number </label>
                <input type="number" name="number" id="number" required />
              </div>
              <br />
              <div>
                <label htmlFor="month">Expiration Date </label>
                <input type="month" name="month" id="month" required />
              </div>
              <div className="img-div">
                <img
                  src="src/assets/images/debit card/visa.jpg"
                  alt="visa card image"
                />
                <img
                  src="src/assets/images/debit card/mastercard.jpg"
                  alt=" master card image"
                />
                <img
                  src="src/assets/images/debit card/amex.jpg"
                  alt="amex card image"
                />
              </div>
            </div>
          </>
        );

      case "creditcard":
        return (
          <>
            <div className="method-main">
              <input type="text" name="cardname" value={"creditcard"} hidden />
              <div>
                <label htmlFor="name">Owner </label>
                <input type="text" name="name" id="name" required />
              </div>
              <div>
                <label htmlFor="cvv">CVV </label>
                <input type="number" name="cvv" id="cvv" required />
              </div>
              <div>
                <label htmlFor="number">Card Number </label>
                <input type="number" name="number" id="number" required />
              </div>
              <br />
              <div>
                <label htmlFor="month">Expiration Date </label>
                <input type="month" name="month" id="month" required />
              </div>
              <div className="img-div">
                <img
                  src="src/assets/images/debit card/visa.jpg"
                  alt="visa card image"
                />
                <img
                  src="src/assets/images/debit card/mastercard.jpg"
                  alt=" master card image"
                />
                <img
                  src="src/assets/images/debit card/amex.jpg"
                  alt="amex card image"
                />
              </div>
            </div>
          </>
        );
    }
  };

  const handelpayment = (e) => {
    e.preventDefault();
    const paymentDetail =
      JSON.parse(localStorage.getItem("paymentDetail")) || [];
      const order =JSON.parse(localStorage.getItem("orderDetail")) || [];

    const paidDetail = {
      name: e.target.name.value,
      cvv: e.target.cvv.value,
      number: e.target.number.value,
      expdate: e.target.month.value,
      username: user.username,
      paidamount: finalTotal,
      cardname: e.target.cardname.value,
    };

    //stor in orders
    cart.map(item=>order.push(item));
    localStorage.setItem("orderDetail", JSON.stringify(order));
    //update cart
    const updatedCart = cartItems.filter(
      (item) => item.username !== user.username
    );
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    paymentDetail.push(paidDetail);
    localStorage.setItem("paymentDetail", JSON.stringify(paymentDetail));
    alert("Payment succesfull, Please continue to shoping.");
    navigate("/");
  };
  const Display = () => {
    if (user) {
      if (usersProductList.length > 0) {
        return (
          <section className="payment-main">
            <div className="pay-div">
              <h2>Total Payabel Amount : ${finalTotal} </h2>
              <label htmlFor="paymentmethod">
                Please select payment method :
              </label>
              <select
                name="paymentmethod"
                id="paymentmethod"
                onChange={handelMethod}
              >
                <option value="" selected hidden disabled>
                  Select payment method
                </option>
                <option value="debitcard">Debit Card</option>
                <option value="creditcard">Credit Card</option>
              </select>
              <div>
                {method ? (
                  <form onSubmit={handelpayment}>
                    {selectedMethod()}
                    <button>Pay</button>
                  </form>
                ) : (
                  <div className="empty">
                    <h3>Please select payment method</h3>
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      } else {
        alert("Please Shop First !");
        navigate("/")
      }
    } else {
      alert("Please Loging First!");
      navigate("/Login")
    }
  };
  return Display();
};

export default Payment;
