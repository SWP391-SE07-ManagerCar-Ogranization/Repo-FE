import React from "react";
import Header from "../../layouts/Header";
// import Footer from "../../layouts/Footer";
import cv from '../../assets/image/cv2.jpg'
import './style.css'
function HomePage() {
  return (
    <>
      <Header/>
      <main className="main-class">
        <div className="box">
          <div className="content">
        <img src={cv} style={{width: "280px",height: "400px"}} alt="cv"/>
          </div>
        </div>
      </main>
      {/* <Footer/> */}

    </>
  );
}

export default HomePage;
