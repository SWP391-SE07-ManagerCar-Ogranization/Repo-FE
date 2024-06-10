import "./App.css";
import React from "react";
import Mytrip from "./component/carpool/Mytrip";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchGroupCar from "./component/carpool/searchGroupCar/SearchGroupCar";
import ListGroupCar from "./component/carpool/listGroupCar/ListGroupCar";
import Home from "./component/carpool/HomeCarpool/Home";
function App() {
  return (
    <div className="flex flex-col gap-10">
      
      
        <Router>
          {/* <Header></Header> */}
          
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/searchGroupCar/:groupCarAndUserString" element={<SearchGroupCar />} />
            <Route path="/mytrip/:id" element={<Mytrip/>} />
            <Route path="/listGroupCar/:userString" element={<ListGroupCar/>} />
            
          </Routes>
        </Router>
      

      
    </div>
  );
}

export default App;
