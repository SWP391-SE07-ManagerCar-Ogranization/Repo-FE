import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import { BsFilePerson } from "react-icons/bs";

function DriverType(props) {
  // const [typeCar, setTypeCar] = useState(1);
  const { typeDriver, text } = props;
  return (
    <div className="flex flex-row items-start">
      {typeDriver === "BsFilePerson" ? (
        <div className="flex flex-row items-center justify-center gap-3 h-[30px] w-[70px] rounded-[30px] bg-black cursor-pointer">
          <BsFilePerson className="text-white-500 h-[16px] w-[16px]"></BsFilePerson>
          <h3 className="text-white-500 text-xl font-light ">{text}</h3>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-3 h-[30px] w-[70px] rounded-[30px] bg-black cursor-pointer">
          <FaCar className="text-white-500 h-[16px] w-[16px]"></FaCar>
          <h3 className="text-white-500 text-xl font-light ">{text}</h3>
        </div>
      )}
    </div>
  );
}

export default DriverType;
