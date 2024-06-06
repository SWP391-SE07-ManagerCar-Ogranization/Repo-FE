import React from "react";

function DropDownTime({ onTimeSelect }) {
  const times = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ];

  return (
    <div className=" flex flex-col absolute bg-white shadow-lg rounded-lg mt-2 w-[300px] z-10  max-h-[400px] overflow-y-auto box-border border-t-[1px]">
      <h3 className="text-center font-Roboto text-[24px] ">
        Select pickup time
      </h3>
      <span className="border-b-4 py-4 border-green-800 border-b-[0.4px] w-full font-black"></span>
      <div className="grid grid-cols-2 gap-2 p-4 ">
        {times.map((time, index) => (
          <button
            key={index}
            className="flex flex-row w-full h-8 flex items-center justify-center p-8 bg-white-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors  border-md border-black border-t-[0.4px] "
            onClick={() => onTimeSelect(time)}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DropDownTime;
