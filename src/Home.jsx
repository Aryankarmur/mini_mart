import Categories from "./components/Categories"
import GridImage from "./components/GridImage"
import HomeProduct from "./components/HomeProduct"
import Navbar from "./components/Navbar"
import Slidebar from "./components/Slidebar"

const Home = () => {
  return (
    <div>
      <Navbar />    
      <Categories /> 
      <Slidebar />
      <HomeProduct />
      <GridImage/>
    </div>
  )
}

export default Home
