import React from "react";
import Header from "../../layouts/Header";
// import Footer from "../../layouts/Footer";
import cv from '../../assets/image/cv2.jpg'
import './style.css'
function HomePage() {
  return (
    <>
      <Header/>
       {/* Hero Section */}
       <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-5">Book a Driver Easily</h2>
          <p className="text-lg mb-5">Reliable and professional drivers at your service, anytime, anywhere.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-20">
        <h3 className="text-3xl font-bold text-center mb-10">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-5 shadow-md rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-3">City Rides</h4>
            <p>Comfortable city rides for your daily commute.</p>
          </div>
          <div className="bg-white p-5 shadow-md rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-3">Outstation Trips</h4>
            <p>Book drivers for long distance travel at affordable rates.</p>
          </div>
          <div className="bg-white p-5 shadow-md rounded-lg text-center">
            <h4 className="text-2xl font-bold mb-3">Airport Transfers</h4>
            <p>On-time airport transfers with reliable drivers.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 BookYourDriver. All rights reserved.</p>
        </div>
      </footer>

    </>
  );
}

export default HomePage;
