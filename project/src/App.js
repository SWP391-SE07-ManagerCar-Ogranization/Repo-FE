import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './component/auth/LoginPage';
import HomePage from './component/home/HomePage';
import { GoogleOAuthProvider } from "@react-oauth/google";
import ProfilePage from './component/userspage/ProfilePage';
import UpdateUser from "./component/userspage/UpdateProfile";
import ForgotPass from "./component/auth/ForgotPass";
import UpdatePass from "./component/auth/UpdatePass";

function App() {
    return (

        <BrowserRouter>
              <GoogleOAuthProvider clientId="966533859873-a39qra6o0qhqjcp6jt2sbg9f2csqlssg.apps.googleusercontent.com">
            <Routes>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/profile" element={<ProfilePage/>}></Route>
            <Route path="/update-user/:userId" element={<UpdateUser />} />
            <Route path="/forgot-password" element={<ForgotPass />} />
            {localStorage.getItem('token') && (
              <>
                <Route
                  path="/update-password"
                  element={<UpdatePass />}
                />
              </>
            )}
            </Routes>
            </GoogleOAuthProvider>
        </BrowserRouter>

    );
}

export default App;