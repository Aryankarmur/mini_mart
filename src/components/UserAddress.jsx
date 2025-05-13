import "/src/assets/css/UserAddress.css";

const UserAddress = () => {
  return (
    <div className="userdetailes">
      <div className="detaile-main">
        <h1>Your Detailes </h1>
        <div className="addressdetailes">
          <label htmlFor="username">Your Name : </label>
          <input type="text" id="username" name="username" required />
          <br />
          <label htmlFor="email">Your Email : </label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="phone">Your Phone : </label>
          <input type="tel" id="phone" name="phone" required />
          <br />
          <label htmlFor="address">Your Address : </label>
          <textarea name="address" id="address" cols="30" rows="10"></textarea>
        </div>
        <div className="btns">
          <button className="update">Update Detailes</button>
          <button className="proceed">Proceed</button>
        </div>
      </div>
    </div>
  );
};

export default UserAddress;
