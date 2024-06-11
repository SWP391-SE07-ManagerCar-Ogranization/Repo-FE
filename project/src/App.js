import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./component/auth/LoginPage";
import Logout from "./component/auth/Logout";
import HomePage from "./component/home/HomePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProfilePage from "./component/userspage/ProfilePage";
import UpdateUser from "./component/userspage/UpdateProfile";
import ForgotPass from "./component/auth/ForgotPass";
import UpdatePass from "./component/auth/UpdatePass";
import Registration from "./component/auth/RegistrationPage";
import { ToastContainer } from "react-toastify";
import Payment from "./component/payment/Payment";
import SearchGroupCar from "./component/carpool/searchGroupCar/SearchGroupCar";
import ListGroupCar from "./component/carpool/listGroupCar/ListGroupCar";
import HomeCarPool from "./component/carpool/HomeCarpool/Home";
import Mytrip from "./component/carpool/Mytrip";
import Test from "./component/Test";
import Page403 from "./layouts/403";
import WorkingPage from "./component/driver/WorkingPage";
import { useState } from "react";

function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(localStorage.getItem("role"));
  window.addEventListener("storage",()=> {
    setIsAuthenticated(localStorage.getItem('role'));
  })
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="966533859873-a39qra6o0qhqjcp6jt2sbg9f2csqlssg.apps.googleusercontent.com">
        <Routes>
          {!isAuthenticated ? (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/forgot-password" element={<ForgotPass />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </>
          ) : (
            <>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/update-password" element={<UpdatePass />} />
              <Route path="/forgot-password" element={<ForgotPass />} />
              <Route path="/logout" element={<Logout />}></Route>
              <Route path="/update-user/:userId" element={<UpdateUser />} />
              <Route path="/payment" element={<Payment />} />
              {/* thinh */}
              {isAuthenticated === "CUSTOMER" && (
                <>
                  <Route
                    exact
                    path="/home-car-pool"
                    element={<HomeCarPool />}
                  />
                  <Route
                    path="/searchGroupCar/:groupCarAndUserString"
                    element={<SearchGroupCar />}
                  />
                  <Route path="/mytrip/:id" element={<Mytrip />} />
                  <Route
                    path="/listGroupCar/:userString"
                    element={<ListGroupCar />}
                  />
                </>
              )}
              {isAuthenticated === "DRIVER"} && (
              <>
                <Route path="/working-page" element={<WorkingPage />} />
                <Route path="/track-revenue" element={<HomeCarPool />} />
              </>
              )
              <Route path="*" element={<Navigate to="/403" />} />
            </>
          )}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/test" element={<Test />} />
          <Route path="/403" element={<Page403 />} />
        </Routes>
      </GoogleOAuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
