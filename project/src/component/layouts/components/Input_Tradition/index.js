import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

function Input_Tradition(props) {
  const { label, placeholder, name, value, onChange, type } = props;

  return (
    <div>
      <label className="font-Roboto font-bold">{label}</label>
      <div className="mr-5 flex items-center h-[52px] gap-4 rounded-md border border-gray-300 bg-white px-4 shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out">
        <FaMapMarkerAlt className="w-5 h-5 text-gray-600"></FaMapMarkerAlt>
        <input
          className="w-full h-[40px] p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
