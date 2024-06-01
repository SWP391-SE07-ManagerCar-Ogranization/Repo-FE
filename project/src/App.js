import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./component/layouts/Header";
import Footer from "./component/layouts/Footer";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    hight: undefined,
  });
  const [isMoble, setIsMoble] = useState(false);
  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    console.log(windowSize);
    if (windowSize.width < 500) {
      setIsMoble(true);
      console.log("mobile");
    } else {
      setIsMoble(false);
    }
  }, [windowSize]);
  return (
    <div className="">
      <Header isMoble={isMoble}></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
