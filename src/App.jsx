import Home from "./Home"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import PrdctDetailes from "./components/item detailes component/PrdctDetailes"
import Navbar from "./components/Navbar"
import Profile from "./components/Profile"
import PaymentDetailes from "./components/PaymentDetailes"
import UserAddress from "./components/UserAddress"

function App() {
 

  return (
    <>
      <Navbar />
      <Home />  
      <PrdctDetailes />
      <UserAddress />
      <PaymentDetailes />
      <Cart />
      <Profile/>
      <Footer />
    </>
  )
}

export default App
