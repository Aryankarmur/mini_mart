import { Link } from "react-router-dom";
import "../css/Profile.css";
const Profile = () => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];

  const hadelLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.href = "/";
  };

  return (
    <div className="profile-main">
      {loggedUser ? (
        <>
          <div className="profdetail">
            <h3>User Detailes</h3>
            <div className="profdetail-content">
              <p>
                <strong> User Name: </strong> {loggedUser.username}
              </p>
              <p>
                <strong> Email: </strong> {loggedUser.email}
              </p>
            </div>
            <div className="profdetail-buttons">
              <button className="logout" onClick={hadelLogout}>
                Log Out
              </button>
              <Link to="/">
                <button className="back">Go to Home</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        alert("Please Login First! ")
      )}
    </div>
  );
};

export default Profile;
