import { Link } from "react-router-dom";
import "../css/Address.css";
const Address = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  return (
    <section className="main-address">
      <div className="detailes">
      <h2><u>User Detailes :</u></h2>
        <p className="username">
          <strong>Name : </strong> {loggedUser.username}
        </p>
        <p className="email">
          <strong>Email : </strong>
          {loggedUser.email}
        </p>
          <label htmlFor="address"><strong> Address : </strong> </label>
          <textarea
            name="address"
            id="address"
            cols="30"
            rows="10"
          required
          disabled
        >{loggedUser.address}</textarea>
          <Link to="/payment"><button> Continue to pay</button></Link>
      </div>
    </section>
  );
};

export default Address;
