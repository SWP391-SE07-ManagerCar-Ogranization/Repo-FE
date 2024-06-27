import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import MapBox from "./component/layouts/Map/MapBox";
import BookingDriverInvoice from "./pages/BookingDriverInvoice/Car";
import { Route, Routes } from "react-router";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./routes/AuthProvider";
import appRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId="966533859873-a39qra6o0qhqjcp6jt2sbg9f2csqlssg.apps.googleusercontent.com">
        <AuthProvider>
          <RouterProvider router={appRoutes} />
        </AuthProvider>
      </GoogleOAuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;
