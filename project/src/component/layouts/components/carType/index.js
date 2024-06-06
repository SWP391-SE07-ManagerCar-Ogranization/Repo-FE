import React, { useState } from "react";
import Select from "react-dropdown-select";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa"; // Add other icons as needed

function CarType() {
  const [carType, setCarType] = useState([]);
  const options = [
    { label: "Motorbike", value: 1, icon: <RiMotorbikeFill /> },
    { label: "6 seater Car", value: 2, icon: <FaCar /> },
    { label: "6 Seater Car", value: 3, icon: <FaCar /> },
  ];
  console.log("carType :", carType);

  const customItemRenderer = ({ item, methods }) => (
    <div
      onClick={() => methods.addItem(item)}
      className="flex items-center cursor-pointer p-2 gap-5"
    >
      <span className="mr-2">{item.icon}</span>
      {item.label}
    </div>
  );

  return (
    <div className="w-[199px] border-white-700 border-solid">
      <label className="font-Roboto font-bold ">Select an Item</label>
      <Select
        options={options}
        labelField="label"
        valueField="value"
        onChange={(values) => setCarType(values)}
        className="w-[199px] h-[52px] rounded-md text-bold flex text-center  font-Roboto font-semibold"
        itemRenderer={customItemRenderer}
      />
    </div>
  );
}

export default CarType;
