import Banner from "../components/Banner";
import Categories from "../components/Categories";
import GridviewProductList from "../components/GridviewProductList";
import HorizontalSlider from "../components/HorizontalSlider";

const Home = () => {
  
  
  return (
    <>
      <Categories />
      <Banner />
      <div className="productSliders">
        <HorizontalSlider
          header="Beauty, Fragrances & Skin care"
          categories={["beauty", "fragrances", "skin-care"]}
        />
        <GridviewProductList
          header="Electronics"
          categories={["laptops", "mobile-accessories", "smartphones", "tablets"]}
        />
        <HorizontalSlider
          header="Women's wear & accessories"
          categories={["womens-dresses", "womens-shoes", "tops", "womens-bags", "womens-jewellery", "womens-watches"]}
        />
        <GridviewProductList
          header="Men's wear & accessories"
          categories={["mens-shirts", "mens-shoes", "mens-watches"]}
        />
        <HorizontalSlider
          header="Groceries, Kitchen & Home appliances"
          categories={["groceries", "home-decoration", "kitchen-accessories", "furniture"]}
        />
        <GridviewProductList
          header="Other products"
          categories={["sports-accessories", "motorcycle", "sunglasses", "vehicle"]}
        />
      </div>
    </>
  );
};

export default Home;
