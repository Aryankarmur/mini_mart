import { Link } from "react-router-dom";
import "../css/Login.css";
const Login = () => {
  // user detailes
  const loggeduser = JSON.parse(localStorage.getItem("loggedInUser"));
  
  const handelUserLogin = (e) => {
    e.preventDefault();
    const enterusername = e.target.email.value;
    const enterpass = e.target.password.value;
    const userData = JSON.parse(localStorage.getItem("user")) || [];

    const user = userData.find(
      (user) => user.username === enterusername && user.password === enterpass
    );
    if (!user) {
      alert("Invalid username or password");
      return;
    }

    if (user) {
      alert("Login successful!");
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      window.location.href = "/"; // Redirect to home page after successful login
    }
  };
  const displayLogin = () => {
    if (loggeduser) {
      
      alert("You are alredy loggedIn!");
      window.location.href = "/";// Redirect to home page after successful login
    } else {
      return(<div className="login-container">
      <form onSubmit={handelUserLogin}>
        <h1>Login</h1>
        <div className="username">
          <label htmlFor="email">Username :</label>
          <input type="text" id="email" name="email" required autoFocus />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/signIn"> Sign in </Link> here.
        </p>
      </form>
    </div>)
    }
  };

  return <>{displayLogin()}</>;
};

export default Login;
