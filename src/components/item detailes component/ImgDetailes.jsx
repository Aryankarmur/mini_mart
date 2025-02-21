import { AiFillThunderbolt } from "react-icons/ai";
import { LiaCartPlusSolid } from "react-icons/lia";
import "/src/assets/css/ImgDetailes.css";

const ImgDetailes = () => {
  return (
    <div className="imgDetailes">
      <div className="img">
        <img src="src\assets\images\miniflowers.jpg" alt="" />
      </div>
      <div className="btns">
        <button className="cartbtn">
          <LiaCartPlusSolid />
        </button>
        <button className="buybtn">
          <AiFillThunderbolt />
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ImgDetailes;
