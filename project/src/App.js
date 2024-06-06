import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import BookingTraditionnel from "./pages/BookingTraditionnel";

function App() {
  return (
    <div className="flex flex-col gap-10">
      {/* <Header></Header> */}
      <BookingTraditionnel></BookingTraditionnel>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
