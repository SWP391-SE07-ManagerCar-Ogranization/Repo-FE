import React, { useState } from "react";
import Header from "../../layouts/Header";
import "./style.css";
import FooterWithSocialLinks from "../../layouts/Footer";
import { Carousel, Image } from "antd";
import Bg1 from "../../assets/images/bg_tradition2.png";
import Bg2 from "../../assets/images/bg_tradition.png";
import Bg3 from "../../assets/images/xe2.jpg";
function HomePage() {

  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <Header />
      <Carousel autoplay autoplaySpeed={3000}>
        <div
          className="w-max h-max">
        <Image
          preview={{ visible: false }}
          src={Bg1}
          onClick={() => setVisible(true)}
        />
        </div>
        <div
          className="w-max h-max">
        <Image
          preview={{ visible: false }}
          src={Bg1}
          onClick={() => setVisible(true)}
        />
        </div>
        <div className="w-max h-max">
        <Image
          preview={{ visible: false }}
          
          src={Bg1}
          onClick={() => setVisible(true)}
        />
        </div>
      </Carousel>

      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src={Bg1} />
          <Image src={Bg2}/>
          <Image src={Bg3}/>
        </Image.PreviewGroup>
      </div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-5">Book a Driver Easily</h2>
          <p className="text-lg mb-5">
            Reliable and professional drivers at your service, anytime,
            anywhere.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200">
            Get Started
          </button>
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

      <FooterWithSocialLinks />
    </>
  );
}

export default HomePage;
