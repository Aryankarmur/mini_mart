import "../css/Banner.css";
import banner from "/src/assets/images/shop-without-limits-e-commerce-twitter-header-editor_template.jpeg";
const Banner = () => {
  return (
    <div className="banner">
      <img src={ banner} alt=" banner image" loading="lazy"/>
    </div>
  );
};

export default Banner;
