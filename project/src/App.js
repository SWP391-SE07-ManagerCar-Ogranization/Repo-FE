import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./component/auth/LoginPage";
import HomePage from "./component/home/HomePage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProfilePage from "./component/userspage/ProfilePage";
import UpdateUser from "./component/userspage/UpdateProfile";
import ForgotPass from "./component/auth/ForgotPass";
import UpdatePass from "./component/auth/UpdatePass";
import { ToastContainer } from 'react-toastify';
import Payment from "./component/payment/Payment";
import SearchGroupCar from "./component/carpool/searchGroupCar/SearchGroupCar";
import ListGroupCar from "./component/carpool/listGroupCar/ListGroupCar";
import HomeCarPool from "./component/carpool/HomeCarpool/Home";
import Mytrip from "./component/carpool/Mytrip";

function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="966533859873-a39qra6o0qhqjcp6jt2sbg9f2csqlssg.apps.googleusercontent.com">
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
          <Route path="/update-user/:userId" element={<UpdateUser />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          {localStorage.getItem("token") && (
            <>
              <Route path="/update-password" element={<UpdatePass />} />
            </>
          )}
          <Route path="/payment" element={<Payment/>}/>
            {/* thinh */}
            <Route exact path="/home-car-pool" element={<HomeCarPool />} />
            <Route path="/searchGroupCar/:groupCarAndUserString" element={<SearchGroupCar />} />
            <Route path="/mytrip/:id" element={<Mytrip/>} />
            <Route path="/listGroupCar/:userString" element={<ListGroupCar/>} />
        </Routes>
      </GoogleOAuthProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
