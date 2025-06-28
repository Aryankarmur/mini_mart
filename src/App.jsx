<<<<<<< HEAD
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
=======
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product_details from "./pages/Product_details";
import Login from "./pages/Login";
import Categorie_search from "./pages/Categorie_search";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sign_up from "./pages/Sign_up";
import Profile from "./pages/Profile";
import Address from "./pages/Address";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Categorie_search/:slug" element={<Categorie_search />} />
          <Route path="/Search/:query" element={<Search />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Product_details/:id" element={<Product_details />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/userdetail" element={<Address/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/SignIn" element={<Sign_up />} />
          <Route path="/Profile" element={<Profile />} />

        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
>>>>>>> a6c1ffcf728e3ad77688f1544bdde548c184c40b
