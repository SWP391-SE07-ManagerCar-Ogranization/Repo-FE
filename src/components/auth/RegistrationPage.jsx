import React, { useEffect, useState } from "react";
import UserService from "../service/UserService";
import { useNavigate } from "react-router-dom";
import firebase from "../cloud/firebase.config.js";
import OtpInput from "react-otp-input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function RegistrationPage() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [flag,setFlag] = useState(false);
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      if(flag) {
      const token = localStorage.getItem("token");
      await UserService.register(formData, token);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        alert("User registered successfully");
      navigate("/");
      } else{
        setError("OTP incorrect")
    }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred while registering user");
    }
  };

  const setupRecapcha = () => {
    window.recapchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        defaultCountry: "VN",
      }
    );
  };

  const sendOtp = async () => {
    const appVerifier = window.recapchaVerifier;
    await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        alert("Sent OTP successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send OTP");
      });
  };

  const handleVerifyOTP = async () => {
    try {
      // await window.confirmationResult.confirm(otp);
      setFlag(true);
      handleSubmit();
    } catch (error) {
      console.log(error);
      alert("Failed to verify");
    }
  };

  useEffect(() => {
    setupRecapcha();
  }, []);

  return (
    <div className="auth-container">
      <h2>Registration</h2>
      {error && <p className="error-message">{error}</p>}
      <PhoneInput
          country={"vn"}
          value={phoneNumber}
          onChange={(phone) => setPhoneNumber("+" + phone)}
        />
        <div id="sign-in-button"></div>
        <button onClick={sendOtp}>
          <span>Send code</span>
        </button>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <button onClick={handleVerifyOTP}>
          <span>Register</span>
        </button>
    </div>
  );
}

export default RegistrationPage;
