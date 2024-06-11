import React, { useState } from "react";
// import "antd/dist/antd.css";
import DateTimeDriver from "../../component/layouts/components/dropDown/DateTimeDriver";

function Driver() {
  const [pickUpDriver, setPickupDriver] = useState();
  const [returnDriver, setReturnDriver] = useState();

  return (
    <div className="flex">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col">
          <label className="font-Roboto font-bold">Pickup</label>
          <div className="mr-5 flex flex-row w-[216px] items-center h-[52px] gap-5 rounded-md border-solid border-white-700 border-[1px] bg-slate-50 px-[0.75rem]">
            <input
              className="rounded-md w-[200px] h-[40px] border-vien"
              id="start-input"
              placeholder="Nhập nơi đi"
              onChange={(e) => setPickupDriver(e.target.value)}
              // onBlur={(e) => {
              //   const address = e.target.value;
              //   geocodeAddress(address, setStartPoint);
              // }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-Roboto font-bold">Return</label>
          <div className="mr-5 flex flex-row w-[216px] items-center h-[52px] gap-5 rounded-md border-solid border-white-700 border-[1px] bg-slate-50 px-[0.75rem]">
            <input
              className="rounded-md w-[200px] h-[40px] border-vien"
              id="start-input"
              placeholder="Nhập nơi đi"
              onChange={(e) => setReturnDriver(e.target.value)}
              // onBlur={(e) => {
              //   const address = e.target.value;
              //   geocodeAddress(address, setStartPoint);
              // }}
            />
          </div>
        </div>
        <div>
          <DateTimeDriver></DateTimeDriver>
        </div>
        <div className="flex mt-8 flex-col justify-center">
          <button className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-orange-300 text-white-500">
            Show Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default Driver;
