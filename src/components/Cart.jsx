import CartCard from "./CartCard"
import "/src/assets/css/cart.css"

const Cart = () => {
  const handelchiledData = (subtotal) => {
    return [subtotal]; 
  }
 handelchiledData()

  return (
    <div className="cart-div">
        <CartCard  handelchiledData={handelchiledData} />
        <CartCard  handelchiledData={handelchiledData} />
        <CartCard  handelchiledData={handelchiledData} />
        <CartCard  handelchiledData={handelchiledData} />
        <CartCard  handelchiledData={handelchiledData} />
        <CartCard  handelchiledData={handelchiledData} />
        <CartCard  handelchiledData={handelchiledData} />
        <CartCard  handelchiledData={handelchiledData} />
        <CartCard  handelchiledData={handelchiledData} />
      <div className="main-total">
        <h4>Total Amount : ₹20000</h4>
      </div>
    </div>
  )
}

export default Cart
