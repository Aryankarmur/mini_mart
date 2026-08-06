import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../components/FetchItem";
import "../css/Search.css";

const Search = () => {
  const [allProducts, setAllProducts] = useState([]);
  const params = useParams();
  const query = params.query?.toLowerCase().trim() || "";

  useEffect(() => {
    const fetchSearchedProduct = async () => {
      const products = await fetchProducts();
      setAllProducts(products);
    };
    fetchSearchedProduct();
  }, []);

  const searchedProducts = useMemo(() => {
    if (!query) return [];
    return allProducts.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.tags.some((tag) => tag.toLowerCase().includes(query)),
    );
  }, [allProducts, query]);

  if (!query) {
    return (
      <section className="search-main">
        <p className="search-empty">
          Enter a search term to see product results.
        </p>
      </section>
    );
  }

  if (!searchedProducts.length) {
    return (
      <section className="search-main">
        <p className="search-empty">No products found for "{params.query}".</p>
      </section>
    );
  }

  return (
    <section className="search-main">
      {searchedProducts.map((product) => (
        <Link to={`/Product_details/${product.id}`} key={product.id}>
          <div className="productdetaile">
            <div className="productImage">
              <img src={product.images[0]} alt={product.title} loading="lazy" />
            </div>
            <p className="productTitle">{product.title}</p>
            <p className="productPrice">${product.price}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Search;
