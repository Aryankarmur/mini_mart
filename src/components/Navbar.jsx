import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/logo.jpg";
import "../css/Navbar.css";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [query, setQuery] = useState("");
  const list = useRef(null);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      list.current.classList.remove("hide");
      list.current.classList.add("show");
    } else {
      list.current.classList.remove("show");
      list.current.classList.add("hide");
    }
  };

  const handelsearch = (e) => {
    e.preventDefault();
    setQuery(null);
  };
  const displaySearchbtn = () => {
    if (query.trim() === "") {
      return (
        <Link to={"/"}>
          <button type="submit">
            <IoSearch />
          </button>
        </Link>
      );
    } else {
      return (
        <Link to={`/Search/${query}`}>
          <button type="submit">
            <IoSearch />
          </button>
        </Link>
      );
    }
  };
  return (
    <nav>
      <div className="logo-div">
        <Link to="/" className="logo">
          <img src={logo} alt="logo image" />
        </Link>
        <h1>Mini mart</h1>
      </div>
      <div className="search-bar">
        <form onSubmit={handelsearch}>
          <input
            type="search"
            name="search"
            value={query}
            placeholder="Search Products"
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          {displaySearchbtn()}
        </form>
      </div>
      <div className="login_profile-cart">
        <Link to={loggedInUser ? "/Profile" : "/Login"}>
          <button className="login-btn">
            {loggedInUser ? "Profile" : "Login"}
          </button>
        </Link>
        <Link to={loggedInUser ? "/orders" : "/signIn"}>
          {loggedInUser ? <button>Orders</button> : <button>Sign in</button>}
        </Link>
        <Link to="/Cart">
          <button className="cart-btn">
            <BsCart2 />
          </button>
        </Link>
      </div>

      {/* responsive part */}
      <div className="resp-part">
        <button className="menu-btn" onClick={handleMenu}>
          {!showMenu ? <IoMdClose /> : <IoMenu />}
        </button>
        <ul className="menu-list hide" ref={list}>
          <li>
            <form onSubmit={handelsearch}>
              <input
                type="search"
                name="search"
                value={query}
                placeholder="Search Products"
                onChange={(e) => setQuery(e.target.value)}
                required
              />
              {displaySearchbtn()}
            </form>
          </li>
          <Link to={loggedInUser ? "/Profile" : "/Login"} className="login-btn">
            <li>{loggedInUser ? "Profile" : "Login"}</li>
          </Link>
          <Link to={loggedInUser ? "/orders" : "/signIn"}>
            {loggedInUser ? <li>Orders</li> : <li>Sign in</li>}
          </Link>
          <Link to="/Cart">
            <li>
              Go to Cart <BsCart2 />
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
