import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from './component/auth/LoginPage';
import LoginPage2 from './component/auth/LoginPage2';
import HomePage from './component/home/HomePage';
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
    return (

        <BrowserRouter>
              <GoogleOAuthProvider clientId="966533859873-a39qra6o0qhqjcp6jt2sbg9f2csqlssg.apps.googleusercontent.com">
            <Routes>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/login2" element={<LoginPage2/>}></Route>
            <Route path="/" element={<HomePage/>}></Route>
            </Routes>
            </GoogleOAuthProvider>
        </BrowserRouter>

    );
}

export default App;