import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";
import BookingDriverInvoice from "./pages/BookingDriverInvoice/Car";

function App() {
  return (
    <div className="flex flex-col gap-10">
      {/* <Header></Header> */}
      <BookingDriverInvoice></BookingDriverInvoice>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
