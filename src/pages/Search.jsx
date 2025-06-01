import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../components/FetchItem";
import "../css/Search.css";

const Search = () => {
  const [Allproducts, setAllproducts] = useState([]);
  const params = useParams();

  // get fetch products by category from fetch.js
  useEffect(() => {
    const fetchsearchedproduct = async () => {
      const getProductById = await fetchProducts();
      setAllproducts(getProductById);
    };
    fetchsearchedproduct();
  }, [params.query]);

  const Searchedproduct = Allproducts.filter((product) =>
    product.title.toLowerCase().includes(params.query)
  );
  
  const displaySearch = () => {
  if ((params.query).trim() === "") {
    alert("Please enter Somthin in search box!");
    window.location.href = "/";
  } else {
    
      
      return (Searchedproduct.map((product) => {
        return (
          <Link
          to={`/Product_details/${product.id}`}
          key={product.id}
          >
        <div className="productdetaile">
          <div className="productImage">
            <img src={product.images[0]} alt={product.title} loading="lazy" />
          </div>
          <p className="productTitle">{product.title}</p>
          <p className="productPrice">${product.price}</p>
        </div>
      </Link>
    );
  }))
}
}

  return <section className="search-main">{displaySearch()}</section>;
};

export default Search;
