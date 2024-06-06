import React, { useState } from "react";

function DropDownDate({ onDateSelect }) {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const days = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
  const dates = Array.from(
    { length: new Date(currentYear, currentMonth + 1, 0).getDate() },
    (_, i) => i + 1
  );

  const handleDateClick = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    onDateSelect(`${monthNames[currentMonth]} ${date}`);
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth + 1);
    }
  };

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setCurrentMonth((prevMonth) => prevMonth - 1);
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="absolute bg-white shadow-lg rounded-lg mt-2 w-full z-10 box-border border-t-[1px]">
      <div className="flex justify-between p-4">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center mb-2">
            <button
              className="mr-4 font-Roboto text-[20px] font-bold text-black px-2 py-1 rounded"
              onClick={handlePreviousMonth}
            >
              {"<"}
            </button>
            <span className="font-bold font-Roboto text-[25px] border-black border-b-[0.4px] font-black ">
              {monthNames[currentMonth]}
            </span>
            <button
              className="ml-4 font-Roboto text-[20px] font-bold text-black px-2 py-1 rounded"
              onClick={handleNextMonth}
            >
              {">"}
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {days.map((day, index) => (
              <div key={index} className="text-center font-bold">
                {day}
              </div>
            ))}
            {dates.map((date) => (
              <button
                key={date}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-500 hover:text-white transition-colors"
                onClick={() => handleDateClick(date)}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownDate;
