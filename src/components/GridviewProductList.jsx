import { useEffect, useState } from "react";
import { fetchProductByMultyCatagory } from "./FetchItem.js";
import "../css/GridViewProductList.css";
import { Link } from "react-router-dom";

const GridviewproductList = ({ categories, header }) => {
  const [productsByCatagory, setproductsByCatagory] = useState([]);

  // get fetch products by category from fetch.js
  useEffect(() => {
    const fetchproductbycat = async (arr) => {
      const getProductByCatagory = await fetchProductByMultyCatagory(arr);
      setproductsByCatagory(getProductByCatagory);
    };

    fetchproductbycat(categories);
  }, [categories]);

  // get random ids from the fetched products
  const getRandomProducts = () => {
    const getFetchdProductIds = productsByCatagory.map((product) => product.id);

    const randomIds = Array.from(getFetchdProductIds)
      .sort(() => 0.5 - Math.random())
      .slice(0, 6);
    //   console.log(randomIds);
    return randomIds;
  };

  //filter randomids from the fetched products
  const randomProductIds = getRandomProducts();
  const randomFilterdProduct = productsByCatagory.filter((product) => {
    return randomProductIds.includes(product.id);
  });
  // console.log(randomFilterdProduct);

  // apply map function to the filtered products
  const productsCard = randomFilterdProduct.map((product, index) => {
    return (
      <Link
        to={`/Product_details/${product.id}`}
        key={product.id}
        className={`card${index}`}
      >
        <div className="productImage">
          <img src={product.images[0]} alt={product.title} loading="lazy" />
        </div>
        <p className="productTitle">{product.title}</p>
        <p className="productPrice">${product.price}</p>
      </Link>
    );
  });
  return (
    <div className="gridviewProductList">
      <h2>{header}</h2>
      <div className="gridviewProductList__products">{productsCard}</div>
    </div>
  );
};

export default GridviewproductList;
