<<<<<<< HEAD
import "../assets/css/Categories.css";

const Categories = () => {
  return (
      <div className="categories-container">
          <h2>Categories</h2>
          <figure className="categories">
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
              <img src="src\assets\images\miniflowers.jpg" alt=""/>
      </figure>
    </div>
  )
}

export default Categories
=======
import { useEffect, useState } from "react";
import "../css/Categories.css";
// import category images
import beauty from "/src/assets/images/categories image/beauty.jpg";
import Fragrances from "/src/assets/images/categories image/Fragrances.png";
import Furniture from "/src/assets/images/categories image/Furniture.png";
import Groceries from "/src/assets/images/categories image/Groceries.jpg";
import Home_Decoration from "/src/assets/images/categories image/dramatic-contemporary-eco-friendly-interior-design-cutout-with-natural-light-high-resolution-free-png.png";
import Kitchen_Accessories from "/src/assets/images/categories image/kitchen_accessories.jpg";
import Laptops from "/src/assets/images/categories image/Laptops.jpg";
import Mens_Shirts from "/src/assets/images/categories image/Mens Shirts.png";
import Mens_Shoes from "/src/assets/images/categories image/Mens Shoes.png";
import Mens_Watches from "/src/assets/images/categories image/Mens Watches.png";
import Mobile_Accessories from "/src/assets/images/categories image/Mobile Accessories.jpeg";
import Motorcycle from "/src/assets/images/categories image/Motorcycle.jpg";
import Skin_Care from "/src/assets/images/categories image/Skin Care.png";
import Smartphones from "/src/assets/images/categories image/Smartphones.png";
import Sports_Accessories from "/src/assets/images/categories image/group-of-various-sporting-equipment-and-balls-for-active-lifestyle-free-png.png";
import Sunglasses from "/src/assets/images/categories image/Sunglasses.png";
import Tablets from "/src/assets/images/categories image/Tablets.png";
import Tops from "/src/assets/images/categories image/Tops.png";
import Vehicle from "/src/assets/images/categories image/Vehicle.png";
import Womens_Bags from "/src/assets/images/categories image/Womens Bags.png";
import Womens_Dresses from "/src/assets/images/categories image/Womens Dresses.png";
import Womens_Jewellery from "/src/assets/images/categories image/elegant-gold-necklace-with-sparkling-crystals-luxurious-jewelry-design-free-png.png";
import Womens‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌_Shoes from "/src/assets/images/categories image/Womens Shoes.png";
import Womens_Watches from "/src/assets/images/categories image/elegant-white-wristwatch-designed-a-radiant-golden-case-a-premium-leather-strap-blends-sophistication-timeless-functionality-free-png.webp";
import { Link } from "react-router-dom";

const Categories = () => {
  const [category, setCategory] = useState([]);
  // category images array
  const imgPath = [
    beauty,
    Fragrances,
    Furniture,
    Groceries,
    Home_Decoration,
    Kitchen_Accessories,
    Laptops,
    Mens_Shirts,
    Mens_Shoes,
    Mens_Watches,
    Mobile_Accessories,
    Motorcycle,
    Skin_Care,
    Smartphones,
    Sports_Accessories,
    Sunglasses,
    Tablets,
    Tops,
    Vehicle,
    Womens_Bags,
    Womens_Dresses,
    Womens_Jewellery,
    Womens‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌_Shoes,
    Womens_Watches,
  ];

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      const catArray = data.map((category, index) => ({
        ...category,
        img: imgPath[index],
      }));
      setCategory(catArray);
    };
    fetchCategories();
  }, []);


  // category classification
  const categoryList = category.map((category) => {
    return (
      <li key={category.name}>
          <Link to={`Categorie_search/${category.slug}`} className="under">
          <div>
            <>
              <div className="cat_images">
                <img
                  src={category.img}
                  alt={category.name}
                  width={200}
                  loading="lazy"
                />
              </div>
              <>
                <span>{category.name}</span>
              </>
            </>
          </div>
      </Link>
        </li>
    );
  });

  return (
    <>
      <ul className="categories">{categoryList}</ul>
    </>
  );
};

export default Categories;
>>>>>>> a6c1ffcf728e3ad77688f1544bdde548c184c40b
