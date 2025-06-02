import { useEffect, useState } from "react";
import { fetchProductByMultyCatagory } from "./FetchItem";
import { Link } from "react-router-dom";
import "../css/SimilarProduct.css";

const Similarproduct = (props) => {
  const [productsByCat, setproductsByCat] = useState([]);
  useEffect(() => {
    const fetchproductbyCat = async (arr) => {
      const getProductByCat = await fetchProductByMultyCatagory(arr);
      setproductsByCat(getProductByCat);
    };
    fetchproductbyCat([props.cat]);
  }, [props.cat]);

  const removexistingProduct = productsByCat.filter(
    (product) => product.title !== props.product
  );
  const getRandomProducts = () => {
    const getFetchdProductIds = removexistingProduct.map(
      (product) => product.id
    );

    const randomIds = Array.from(getFetchdProductIds)
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    //   console.log(randomIds);
    return randomIds;
  };
  //filter randomids from the fetched products
  const randomProductIds = getRandomProducts();
  const randomFilterdProduct = removexistingProduct.filter((product) => {
    return randomProductIds.includes(product.id);
  });
  // console.log(randomFilterdProduct);

  // apply map function to the filtered products
  const productsCard = randomFilterdProduct.map((product) => {
    return (
      <Link to={`/Product_details/${product.id}`} key={product.id}>
        <div className="productImage">
          <img src={product.images[0]} alt={product.title} loading="lazy" />
        </div>
        <p className="productTitle">{product.title}</p>
        <p className="productPrice">${product.price}</p>
      </Link>
    );
  });

  return (
    <div className="similar-main">
      <h2>Similar Products</h2>
      <div className="products">{productsCard}</div>
    </div>
  );
};

export default Similarproduct;
