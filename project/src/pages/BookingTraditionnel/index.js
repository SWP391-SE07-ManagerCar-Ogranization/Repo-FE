import React, { useState } from "react";
import images from "../../assets/icons/logo.svg";
import { BsPersonCircle } from "react-icons/bs";
import CarType from "../../component/layouts/components/carType";
import tradition2 from "../../assets/images/bg_tradition2.png";

import Input_Tradition from "../../component/layouts/components/Input_Tradition";
import Input_Tradition_Date from "../../component/layouts/components/Input_Tradition_Date";
import DriverType from "../../component/layouts/components/driverType";

function BookingTraditionnel(props) {
  const { typeCar } = props;
  const [pickup, setPickup] = useState("");
  const [end, setEnd] = useState("");
  const [time, setTime] = useState("");
  console.log("pickup :", pickup);
  console.log("end :", end);
  console.log("time :", time);

  return (
    <div
      className="flex items-center h-[600px] flex-col"
      style={{
        backgroundImage: `url(${tradition2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-center bg-orange-300">
        <p className="font-Roboto font-bold text-xl">
          {" "}
          111 years of SIXT. 111 years of tradition.
        </p>
      </div>
      <div>
        <div className="">
          <div className="flex justify-between gap-[895px] items-center">
            <div className="">
              <img src={images} width={"102px"} alt="logo" className=""></img>
            </div>
            <div className="flex flex-row items-center">
              <BsPersonCircle className="mr-5 text-3xl" />
              <h2 className="font-Roboto font-bold">Đào Bá Anh Quân</h2>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center rounded-[20px] w-[1150px] h-[200px] bg-white-500  justify-center">
          <div className="flex flex-row justify-start w-full gap-5 mb-8 ml-[22px]">
            <DriverType text={"Cars"}></DriverType>
            <DriverType typeDriver="BsFilePerson" text={"Driver"}></DriverType>
          </div>
          <div className="flex flex-row gap-5">
            <Input_Tradition
              label={"Pickup"}
              placeholder={"Nhập nơi đi"}
              setPickup={setPickup}
            ></Input_Tradition>
            <Input_Tradition
              label={"Return"}
              placeholder={"Nhập nơi đến"}
              setEnd={setEnd}
            ></Input_Tradition>
            <div className="flex flex-row gap-10">
              <Input_Tradition_Date
                label={"Pick-up date"}
              ></Input_Tradition_Date>
            </div>
            <div className="flex items-center">
              <CarType></CarType>
            </div>
            <div className="flex mt-8 flex-col justify-center">
              <button className=" flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-orange-300 text-white-500">
                Show map
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[307px] mt-[310px] w-full  flex flex-col  bg-orange-300 text-center tightest ">
        <span className="text-[72px] font-Roboto font-black pt-[1.5rem] pb-[1.5rem]  leading-[72px] tightest">
          Don't rent a car.
        </span>
        <br />
        <span className="text-[72px] font-Roboto font-black leading-[72px] tightest">
          Rent THE Car.
        </span>
        <h1 className="font-Roboto font-bold text-3xl">
          Premium car rental at affordable rates. Worldwide.
        </h1>
      </div>
    </div>
  );
}

export default BookingTraditionnel;
