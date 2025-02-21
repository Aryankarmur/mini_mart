import "../assets/css/Gridcards.css";

const Gridcards = () => {
  return (
    <div className="gridcards">
      <div className="gridcards__header">
        <h2>
          Lorem ipsum dolor sit, amet  
        </h2>
        <p> › </p>
      </div>
      <div className="gridcards__container">
        <div className="card_details">
          <img src="src\assets\images\miniflowers.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>Special Offers</h3>
        </div>
        <div className="card_details">
          <img src="src\assets\images\miniflowers.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>Special Offers</h3>
        </div>
        <div className="card_details">
          <img src="src\assets\images\miniflowers.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>Special Offers</h3>
        </div>
        <div className="card_details">
          <img src="src\assets\images\miniflowers.jpg" alt="" />
          <p>Lorem ipsum dolor sit amet.</p>
          <h3>Special Offers</h3>
        </div>
      </div>
    </div>
  );
};

export default Gridcards;
