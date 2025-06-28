import { useEffect, useState } from "react";
import "../css/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // user detailes
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // cart products
  const cartItems = JSON.parse(localStorage.getItem("cartItems"))||[];

  // filter products from cartitems
  const usersProductList = cartItems.filter(
    (product) => product.username === user.username
  );

  useEffect(() => {
    setCart(usersProductList);
  }, []);

  // quantity incriment decriment function
  const handeldecriment = (productId) => {
    const updatedProduct = cart.map((item) => {
      return item.id === productId
        ? {
            ...item,
            quantity: item.quantity <= 1 ? item.quantity : (item.quantity -= 1),
          }
        : item;
    });
    setCart(updatedProduct);
    localStorage.setItem("cartItems", JSON.stringify(updatedProduct));
  };

  const handelincriment = (productId) => {
    const updatedProduct = cart.map((item) => {
      return item.id === productId
        ? { ...item, quantity: (item.quantity += 1) }
        : item;
    });
    setCart(updatedProduct);
    localStorage.setItem("cartItems", JSON.stringify(updatedProduct));
  };

  // get final total of cart
  const finalTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  //remove item from cart
  const handelremoveitem = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  // console.log(cart);

  // create product visual list
  const cartDetailes = cart.map((product) => {
    return (
      <div className="main_container" key={product.id}>
        <div className="productImg">
          <img src={product.images[0]} alt={product.title} />
        </div>
        <div className="productdetail">
          <h3 className="productTitle">{product.title} </h3>
          <p className="productPrice">
            <strong>Price :</strong> ${product.price}
          </p>
          <div className="quantitydiv">
            <button
              className="decribtn"
              onClick={() => handeldecriment(product.id)}
            >
              -
            </button>
            <input
              type="text"
              value={product.quantity}
              className="quantityValue"
              disabled
            />
            <button
              className="incribtn"
              onClick={() => handelincriment(product.id)}
            >
              +
            </button>
          </div>
          <div className="removeitem">
            <button onClick={() => handelremoveitem(product.id)}>
              Remove from cart
            </button>
          </div>
        </div>
        <div className="subtotaldiv">
          <p>
            <strong>Sub Total</strong>
          </p>
          <p>${Math.round(product.price * product.quantity)}</p>
        </div>
      </div>
    );
  });

  return (
    <section className="cart-main">
      {cart.length > 0 ? (
        <>
          {cartDetailes}
          <div className="finaltotal">
            <p>
              <strong>Final Total : </strong>${Math.round(finalTotal)}
            </p>
          </div>
          <div className="continuebtn">
            <Link to="/userdetail">
            <button> Continue to pay </button>
            </Link>
          </div>
        </>
      ) : (
        "no items in cart please shop first"
      )}
    </section>
  );
};

export default Cart;
