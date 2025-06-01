import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductByMultyCatagory } from "../components/FetchItem";
import "../css/Categorie_search.css";

const Categorie_search = () => {
  const [productsByCatagory, setproductsByCatagory] = useState([]);
  const params = useParams();

  // get fetch products by category from fetch.js
  useEffect(() => {
    const fetchproductbycat = async (arr) => {
      const getProductByCatagory = await fetchProductByMultyCatagory(arr);
      setproductsByCatagory(getProductByCatagory);
    };

    fetchproductbycat([params.slug]);
  }, [params.slug]);

  const catAllData = productsByCatagory.map((product) => {
    return (
      <Link to={`/Product_details/${product.id}`} key={product.id} className="under">
        <li>
          <div className="productImage">
            <img src={product.images[0]} alt={product.title} loading="lazy" />
          </div>
          <p className="productTitle">{product.title}</p>
          <p className="productPrice">${product.price}</p>
        </li>
      </Link>
    );
  });

  return (
    <div className="main-cat_div">
      <h1> {params.slug.toLocaleUpperCase()} </h1>
      <div className="product_cards">{catAllData}</div>
    </div>
  );
};

export default Categorie_search;
