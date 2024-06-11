import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Input_Tradition(props) {
  const { label, placeholder, name, value, onChange, type } = props;

  return (
    <div>
      <label className="font-Roboto font-bold">{label}</label>
      <div className="mr-5 flex flex-row w-[216px] items-center h-[52px] gap-5 rounded-md border-solid border-white-700 border-[1px] bg-slate-50 px-[0.75rem]">
        <FaMapMarkerAlt className="w-[20px] h-[20px]"></FaMapMarkerAlt>
        <input
          className="rounded-md w-[200px] h-[40px] border-vien"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
        />
      </div>
    </div>
  );
}

export default Input_Tradition;
