import React, { useState, useEffect } from "react";
import * as PhoneService from "../../service/PhoneService";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button } from "antd";

function LoginPage() {
  const [otp, setOtp] = useState("");
  const [formSent, setFormSent] = useState(false); 
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");

  const sendOTP = async (e) => {
    e.preventDefault();
    try {
      await PhoneService.sendSMS(phoneNumber);
      setFormSent(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    try {
      const userData = await PhoneService.verifyOTP(phoneNumber,otp);
      console.log(userData);
      if(userData.token) {
        localStorage.setItem("token", userData.token);
        localStorage.setItem("role", userData.role);
        navigate("/update-password");
      } else {
        setError(userData.message);
        console.log(userData.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
  }, [formSent,error]);
  return (
    <div className="auth-container">
      {error && <p className="error-message">{error}</p>}
      {!formSent ? (
        <div>
          <PhoneInput
        country={"vn"}
        value={phoneNumber}
        onChange={(phone) => setPhoneNumber("+" + phone)}
      />
      <div id="sign-in-button"></div>
      <Button type="primary" onClick={sendOTP}>
        <span>Send code</span>
      </Button>
        </div>
      ) : (
        <form onSubmit={handleVerifyOTP}>
        <div className="form-group">
          <label>OTP: </label>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <button type="submit">Verify OTP</button>
      </form>
      )}
    </div>
  );
}

export default LoginPage;
