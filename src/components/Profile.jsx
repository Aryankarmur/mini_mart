import '/src/assets/css/Profile.css';

const Profile = () => {
    return (
        <div className="profile-page">
            <h1>Profile Page</h1>
            <div className="profile-info">
                <div>
                    <label htmlFor="name">User name : </label>
                    <input type="text" id='name' value={"name"} disabled />
                </div>
                <div>
                    <label htmlFor="email">User email : </label>
                    <input type="text" id='email' value={"email"} disabled />
                </div>
                <div>
                    <label htmlFor="address">User Address : </label>
                    <textarea name="" id="address"></textarea>
                </div>
            </div>
            <div className="btns">
                <button>Update profile</button>
                <button>Back →</button>
            </div>
        </div>
    );
};

export default Profile;
