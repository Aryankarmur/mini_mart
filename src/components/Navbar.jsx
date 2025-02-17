import { RiAccountCircle2Line } from "react-icons/ri";
import "../assets/css/Navbar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
            <div className="container">
              <div className="logo">
                <h2>Logo</h2>
                  </div>
                  <div className="search">
                      <input type="search" name="" id="" />
                        <button>Search</button>
                  </div>
              <div className="nav-links">
                <ul>
                          <li className="profile" title="Profile"><a href="#"> <RiAccountCircle2Line />
                    Profile</a></li>
                    <li className="cart" title="Cart"><a href="#"><AiOutlineShoppingCart />
                    
                    </a></li>
                </ul>
              </div>
            </div>
      </div>
    </>
  )
}

export default Navbar
