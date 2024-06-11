import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import BookingDriverInvoice from "./pages/BookingDriverInvoice/Car";

import MapBox from "./component/layouts/Map/MapBox";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<BookingDriverInvoice></BookingDriverInvoice>}
        />
        <Route path="/showmap" element={<MapBox></MapBox>} />
      </Routes>
    </div>
  );
}

export default App;
