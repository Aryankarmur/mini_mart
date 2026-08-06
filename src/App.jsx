import { Suspense, lazy } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Product_details = lazy(() => import("./pages/Product_details"));
const Login = lazy(() => import("./pages/Login"));
const Categorie_search = lazy(() => import("./pages/Categorie_search"));
const Sign_up = lazy(() => import("./pages/Sign_up"));
const Profile = lazy(() => import("./pages/Profile"));
const Address = lazy(() => import("./pages/Address"));
const Payment = lazy(() => import("./pages/Payment"));
const Orders = lazy(() => import("./pages/Orders"));
const Search = lazy(() => import("./pages/Search"));
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense fallback={<div className="route-loader">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/Categorie_search/:slug"
              element={<Categorie_search />}
            />
            <Route path="/Search/:query" element={<Search />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Product_details/:id" element={<Product_details />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/userdetail" element={<Address />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignIn" element={<Sign_up />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </Suspense>
      </main>
      <footer>
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
