import Banner from "../components/Banner";
import Categories from "../components/Categories";
import GridviewproductList from "../components/GridviewProductlist";
import Horizontalslider from "../components/HorizontalSlider";

const Home = () => {
  
  
  return (
    <>
      <Categories />
      <Banner />
      <div className="productSliders">
        <Horizontalslider
          header="Beauty, Fragrances & Skin care"
          categories={["beauty", "fragrances", "skin-care"]}
        />
        <GridviewproductList
          header="Electronics"
          categories={["laptops", "mobile-accessories", "smartphones", "tablets"]}
        />
        <Horizontalslider
          header="Women's wear & accessories"
          categories={["womens-dresses", "womens-shoes", "tops", "womens-bags", "womens-jewellery", "womens-watches"]}
        />
        <GridviewproductList
          header="Men's wear & accessories"
          categories={["mens-shirts", "mens-shoes", "mens-watches"]}
        />
        <Horizontalslider
          header="Groceries, Kitchen & Home appliances"
          categories={["groceries", "home-decoration", "kitchen-accessories", "furniture"]}
        />
        <GridviewproductList
          header="Other products"
          categories={["sports-accessories", "motorcycle", "sunglasses", "vehicle"]}
        />
      </div>
    </>
  );
};

export default Home;
