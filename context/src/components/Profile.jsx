import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setError, setUser } = useContext(UserContext);

  // if (error) return <div>{error}</div>;
  let navigate = useNavigate();
  if (!user) {
    return (
      <div>
        Please Login first <Link to={"/"}>Login</Link>
      </div>
    );
  }
  function handleLogout() {
    setError(null);
    setUser(null);
    navigate("/");
  }

  return (
    <>
      <div>Welcome , {user.userName}</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Profile;
