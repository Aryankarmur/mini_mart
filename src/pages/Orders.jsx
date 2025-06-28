import { Link } from "react-router-dom";
import "../css/Order.css";

const Orders = () => {
    // user detailes
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  //order detailes
  const orders = JSON.parse(localStorage.getItem("orderDetail"))||[];

  // filter orders
  const usersOrder = orders.filter((item) => item.username === user.username);
  const orderDetailes = usersOrder.map((product, index) => {
    return (
      <Link to={`/Product_details/${product.id}`} key={index}>
      <div className="order_main">
        <div className="img_div">
          <img src={product.images[0]} alt="" />
        </div>
        <div className="details">
          <p><strong>{product.title}</strong></p>
          <p><strong>Price:</strong> ${Math.round(product.price)}</p>
          <p><strong>Quantity: </strong>{product.quantity}</p>
          <p><strong>Sub Total: </strong> ${Math.round(product.price * product.quantity)}</p>
        </div>
      </div>
      </Link>
    )
  })
  
  return (
    <section className="order-sec">

      {orders.length > 0 ? (
        <>
        <h2>Your orders </h2>
        {orderDetailes}
        </>
      ):(
      "no orders found"
      )
      
      }
    </section>
  )
}

export default Orders
