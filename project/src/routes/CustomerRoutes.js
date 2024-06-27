import React from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoutes";
import UpdateProfile from "../component/userspage/UpdateProfile";
import ProfilePage from "../component/userspage/ProfilePage";
import HomeCarPool from "../component/carpool/HomeCarpool/Home";
import WalletPage from "../component/userspage/WalletPage";
import SystemCharge from "../component/payment/SystemCharge";
import SearchGroupCar from "../component/carpool/searchGroupCar/SearchGroupCar";
import Mytrip from "../component/carpool/Mytrip";
import ListGroupCar from "../component/carpool/listGroupCar/ListGroupCar";
import Success from "../layouts/payment/Success";
import Booking from "../pages/BookingDriverInvoice/Car";

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route
        path="/update-user/:userId"
        element={
          <ProtectedRoute roles={["CUSTOMER", "DRIVER"]}>
            <UpdateProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute roles={["CUSTOMER", "DRIVER"]}>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/home-car-pool"
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <HomeCarPool />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wallet/your-wallet"
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <WalletPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/wallet/add-money-to-balance"
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <SystemCharge />
          </ProtectedRoute>
        }
      />
      <Route
        path="/payment/result/success"
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <Success />
          </ProtectedRoute>
        }
      />
      <Route
        path="/searchGroupCar/:groupCarAndUserString"
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <SearchGroupCar />
          </ProtectedRoute>
        }
      />
      <Route
        path="/mytrip/:accountId"
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <Mytrip />
          </ProtectedRoute>
        }
      />
      <Route
        path="/listGroupCar/:groupCarAndUserString"
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <ListGroupCar />
          </ProtectedRoute>
        }
      />
      <Route
        path="/booking-driver"
        element={
          <ProtectedRoute roles={["CUSTOMER"]}>
            <Booking />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default CustomerRoutes;
