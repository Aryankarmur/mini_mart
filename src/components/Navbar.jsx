<<<<<<< HEAD
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
=======
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/logo.jpg";
import "../css/Navbar.css";
import { useEffect, useRef, useState } from "react";
import { Link, Links } from "react-router-dom";
import { fetchProducts } from "./FetchItem";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [query, setQuery] = useState("");
  const list = useRef(null);

  const [Allproducts, setAllproducts] = useState([]);


  // get fetch products by category from fetch.js
  useEffect(() => {
    const fetchsearchedproduct = async () => {
      const getProductById = await fetchProducts();
      setAllproducts(getProductById);
    };
    fetchsearchedproduct();
  }, [query]);

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
    <Link to={query.trim() === "" ? "/" : `/Search/${query.toLocaleLowerCase()}`} />
    setQuery("");
    
  };


  
  const displaySuggetion = () => {
      if (query.trim() !== "") {
        const Searchedproduct = Allproducts.filter((product) =>
          product.title.toLowerCase().includes(query) || product.tags.includes(query)
      );
      const suggetion = Searchedproduct.map((product, index) => {
        return (
          <>
          <li key={product.id}> {product.tags[1] || product.title} </li>
          <li key={index}> { product.title} </li>
          </>
        )
      })
        
      if (query) {
        return suggetion;
      } 
    }
  }


  const handelsearchsuggestion = (e) => {
    setQuery(e.target.innerText);    
  }

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
          
          <Link to={query.trim() === ""?"/":`/Search/${query.toLocaleLowerCase()}`}> 
          <button type="submit">
            <IoSearch />
          </button>
         </Link>
          

          <ul onClick={handelsearchsuggestion} className={`suggetionList ${query.trim()===""?"hide":"show"} `}>
            {displaySuggetion()}
          </ul>
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
          
          <Link to={query.trim() === ""?"/":`/Search/${query.toLocaleLowerCase()}`}>
          <button type="submit">
            <IoSearch />
          </button>
        </Link>
          

          <ul onClick={handelsearchsuggestion} className={`suggetionList ${query.trim()===""?"hide":"show"} `}>
            {displaySuggetion()}
          </ul>
        </form>
          </li>
          <Link to="/About" className="login-btn">
            <li>About</li>
          </Link>
          <Link to="/Contact" className="login-btn">
            <li>Contact</li>
          </Link>
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
>>>>>>> a6c1ffcf728e3ad77688f1544bdde548c184c40b
