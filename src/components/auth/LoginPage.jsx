import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../service/UserService";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await UserService.login(email, password);
      console.log(userData);
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        navigate("/profile");
      } else {
        setError(userData.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  const handleSubmitGoogle = async (formData) => {
    try {
        const userData = await UserService.loginGoogle(formData);
      if (userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        navigate("/profile");
      } else {
        setError(userData.message);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };


  return (
    <div className="auth-container">
      <h2>Login</h2>
      <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
            const credentialResponseDecoded = jwtDecode(credentialResponse.credential);
            const newFormData = {
                name: credentialResponseDecoded.name,
                email: credentialResponseDecoded.email
              };
              handleSubmitGoogle(newFormData);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      </div>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
