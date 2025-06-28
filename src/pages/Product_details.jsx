import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductByMultyId } from "../components/FetchItem";
import "../css/Product_details.css";
import SimilarProduct from "../components/SimilarProduct";

const Product_details = () => {
  const [productsById, setproductsById] = useState([]);
  const params = useParams();


  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  // get fetch products by category from fetch.js
  useEffect(() => {
    const fetchproductbyid = async (arr) => {
      const getProductById = await fetchProductByMultyId(arr);
      setproductsById(getProductById);
    };
    fetchproductbyid([params.id]);
  }, [params.id]);

  let productdetail = {};
  const productAllData = productsById.map((product) => {
    productdetail = {
      cat: product.category,
      title: product.title,
    };
    const handelcart = () => {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingProduct = cartItems.find((item) => item.id === product.id);
      if (user) {
        if (existingProduct) {
          existingProduct.quantity += 1; // Increment quantity if product already exists
        } else {
          const newProduct = {
            id: product.id,
            title: product.title,
            price: product.price,
            images: product.images,
            category: product.category,
            quantity: 1, // Initialize quantity to 1 for new products
            username: user.username,
        };
          cartItems.push(newProduct);
        }
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        alert("Product added to cart successfully!");
      } else {
        alert("Please Login First!");
      }
    }

      return (
      <div className="main_product_div" key={product.title}>
        <div className="productImage">
          <img src={product.images[0]} alt={product.title} loading="lazy" />
        </div>
        <div className="product_detailes">
          <p className="productTitle">{product.title}</p>
          <p className="productPrice"><span>Price : </span> ${product.price}</p>
          <p><span>Brand :  </span> {product.brand}</p>
          <div className="buttons">
            <button id="addbtn" onClick={handelcart}>+ Add to cart </button>
          </div>
          <p className="descrip"><span>Description : </span>{product.description}</p>
        </div>
      </div>
    );
    });
  
  return (
    <section>
      {productAllData}
      <SimilarProduct cat ={productdetail.cat} product={productdetail.title}  />
    </section>
  );
};

export default Product_details;
