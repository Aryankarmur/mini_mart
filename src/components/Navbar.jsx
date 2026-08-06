import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/images/logo.jpg";
import "../css/Navbar.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchProducts } from "./FetchItem";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [query, setQuery] = useState("");
  const list = useRef(null);
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchSearchedProduct = async () => {
      const products = await fetchProducts();
      setAllProducts(products);
    };

    fetchSearchedProduct();
  }, []);

  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      navigate("/");
      return;
    }
    navigate(`/Search/${query.toLocaleLowerCase().trim()}`);
    setQuery("");
  };

  const searchResults = useMemo(() => {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return [];

    return allProducts.filter((product) => {
      const titleMatch = product.title?.toLowerCase().includes(normalizedQuery);
      const tags = Array.isArray(product.tags) ? product.tags : [];
      const tagMatch = tags.some((tag) =>
        tag.toLowerCase().includes(normalizedQuery),
      );
      return titleMatch || tagMatch;
    });
  }, [query, allProducts]);

  const showSuggestions = query.trim() !== "" && searchResults.length > 0;

  const displaySuggestion = () => {
    return searchResults
      .slice(0, 5)
      .map((product) => (
        <li key={product.id}>
          {(Array.isArray(product.tags) && product.tags[1]) || product.title}
        </li>
      ));
  };

  const handleSearchSuggestion = (e) => {
    if (e.target.tagName === "LI") {
      setQuery(e.target.innerText);
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
        <form onSubmit={handleSearch}>
          <input
            type="search"
            name="search"
            value={query}
            placeholder="Search Products"
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <IoSearch />
          </button>
          <ul
            onClick={handleSearchSuggestion}
            className={`suggestionList ${showSuggestions ? "show" : "hide"}`}
          >
            {showSuggestions && displaySuggestion()}
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
          <button>{loggedInUser ? "Orders" : "Sign in"}</button>
        </Link>
        <Link to="/Cart">
          <button className="cart-btn">
            <BsCart2 />
          </button>
        </Link>
      </div>
      <div className="resp-part">
        <button className="menu-btn" onClick={handleMenu}>
          {!showMenu ? <IoMenu /> : <IoMdClose />}
        </button>
        <ul className={`menu-list ${showMenu ? "show" : "hide"}`} ref={list}>
          <li>
            <form onSubmit={handleSearch}>
              <input
                type="search"
                name="search"
                value={query}
                placeholder="Search Products"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">
                <IoSearch />
              </button>
              <ul
                onClick={handleSearchSuggestion}
                className={`suggestionList ${showSuggestions ? "show" : "hide"}`}
              >
                {showSuggestions && displaySuggestion()}
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
            <li>{loggedInUser ? "Orders" : "Sign in"}</li>
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
