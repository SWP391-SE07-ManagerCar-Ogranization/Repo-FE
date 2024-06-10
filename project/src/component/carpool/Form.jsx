import { BiDollarCircle, BiMap, BiKey, BiPowerOff, BiCar } from "react-icons/bi";

import { useState } from "react";
function InputGroup4({
  label,
  name,
  value,
  onChange,
  type = "text",
  decoration,
  inputClassName = "",
  decorationClassName = "",
  disabled,
}) {
  return (
    <div className="flex flex-row-reverse items-stretch w-full">
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={label}
        aria-label={label}
        className={`peer block w-full p-3 text-gray-600 bg-gray-100 border border-l-0 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-0 appearance-none rounded-tl-none rounded-bl-none rounded transition-colors duration-300 ${
          disabled ? "bg-gray-200" : ""
        } ${inputClassName}`}
        disabled={disabled}
      />
      <div
        className={`flex items-center rounded-tr-none rounded-br-none rounded pl-3 py-3 text-gray-600 bg-gray-100 border border-r-0 peer-focus:border-red-400 peer-focus:bg-white transition-colors duration-300 ${
          disabled ? "bg-gray-200" : ""
        } ${decorationClassName}`}
      >
        {decoration}
      </div>
    </div>
  );
}

function Form() {
  const [select, setSelect] = useState('four-seated');

  const handleSelect = (option) => {
    setSelect(option);
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 -mt-40">
  <div className="flex flex-col bg-white w-[64rem] p-5 sm:p-10 gap-8 rounded-md shadow-2xl space-y-6 pt-0">
    <InputGroup4
      name="startpoint"
      label="Startpoint"
      type="text"
      decoration={<BiCar size="1rem" />}
    />
    <InputGroup4
      name="destination"
      label="Destination"
      type="text"
      decoration={<BiCar size="1rem" />}
    />
    <InputGroup4
      name="date"
      label="Date"
      type="datetime-local"
      decoration={<BiKey size="1rem" />}
    />  
    <div className="flex">
      <div className="flex items-center me-4">
        <input 
        id="inline-checkbox" type="checkbox" 
        value="" 
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={select === 'four-seated'}
        onChange={() => handleSelect('four-seated')}
        />
        
        <label htmlFor="inline-checkbox" className="ms-2 text-sm font-bold text-black">four-seated</label>
      </div>
      <div className="flex items-center me-4">
        <input id="inline-2-checkbox" 
        type="checkbox" value="" 
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        checked={select === 'seven-seated'}
        onChange={() => handleSelect('seven-seated')}
        />
        <label htmlFor="inline-2-checkbox" className="ms-2 text-sm font-bold text-black">seven-seated</label>
      </div>
    </div>
    <div>
      <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Search</button>
      <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Create Group</button>
    </div>
  </div>
</div>

  );
}

export default Form;
