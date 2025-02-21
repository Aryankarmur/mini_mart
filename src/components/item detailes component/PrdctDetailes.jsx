import RowScrollBar from "../RowScrollBar";
import ImgDetailes from "./ImgDetailes";
import PrdctSpecs from "./PrdctSpecs";
import "/src/assets/css/PrdctDetailes.css"

const PrdctDetailes = () => {
  return (
    <div>
      <div className="productdetails">
        <div>
          <ImgDetailes />
        </div>
        <div>
          <PrdctSpecs />
        </div>
      </div>
      <div>
        <RowScrollBar />
      </div>
    </div>
  );
};

export default PrdctDetailes;
