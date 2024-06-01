import { useEffect, useState } from "react";

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
    // console.log("mobile");
  } else {
    setIsMoble(false);
  }
}, [windowSize]);
