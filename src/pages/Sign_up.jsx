import { Link, useNavigate } from "react-router-dom";
import "../css/Signup.css";

const Sign_up = () => {
  const navigate = useNavigate();
    // user detailes
  const loggeduser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handeluserSignUp = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user")) || [];
    const existinguser = user.find(
      (user) => user.username === e.target.username.value
    );

    if (existinguser) {
      alert("user alredy exist");
      navigate("/Login");
    } else {
      const newUser = {
        email: e.target.email.value,
        username: e.target.username.value,
        password: e.target.password.value,
        address: e.target.address.value
      };
      user.push(newUser);
      navigate("/Login");
    }

    localStorage.setItem("user", JSON.stringify(user));
  };
  const displaySignin = () => {
    if (loggeduser) {
      
      alert("You are alredy loggedIn!");
      window.location.href = "/";// Redirect to home page after successful login
    } else {
      return (
        <>
        <div className="signup-container">
        <form onSubmit={handeluserSignUp}>
          <h1>Sign Up</h1>
          <div className="username">
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required autoFocus />
          </div>
          <div className="username">
            <label htmlFor="username">Username :</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <label htmlFor="address">Enter your Address: </label>
            <textarea name="address" id="address" cols="38" rows="10" required></textarea>
          </div>
          <p>
            Already have an account? <Link to="/Login"> Login </Link> here.
          </p>
          <button type="submit">Sign Up</button>
        </form>
      </div>
        </>
      )
    }
  }

  return (
    <div>
      {displaySignin()}
    </div>
  );
};

export default Sign_up;
