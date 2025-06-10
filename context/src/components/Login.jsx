import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const { setUser, setError, error } = useContext(UserContext); // {setUser} comes from UserContextProvider

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "" || password === "") {
      setError("Fields Cannot be empty");
      setUser(null);
      return;
    }
    setError("");
    setUser({ userName, password });
    navigate("/profile")
  };

  return (
    <>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="UserName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>

      <div>{error}</div>
    </>
  );
};

export default Login;
