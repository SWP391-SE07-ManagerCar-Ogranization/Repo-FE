// App.js
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import LoginPage from "./components/auth/LoginPage";
import RegistrationPage from "./components/auth/RegistrationPage";
import FooterComponent from "./components/common/Footer";
import UserService from "./components/service/UserService";
import UpdateUser from "./components/userspage/UpdateUser";
import UserManagementPage from "./components/userspage/UserManagementPage";
import ProfilePage from "./components/userspage/ProfilePage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="966533859873-a39qra6o0qhqjcp6jt2sbg9f2csqlssg.apps.googleusercontent.com">
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/update-user/:userId" element={<UpdateUser />} />
            {/* Check if user is authenticated and admin before rendering admin-only routes */}
            {UserService.adminOnly() && (
              <>
                <Route
                  path="/admin/user-management"
                  element={<UserManagementPage />}
                />
              </>
            )}
            <Route path="*" element={<Navigate to="/login" />} />‰
          </Routes>
        </div>
        <FooterComponent />
      </div>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
