import React, { useState } from "react";

const DateTimeDriver = () => {
  const [dateDriver, setDateDriver] = useState("");
  console.log("dateDriver:", dateDriver);

  return (
    <div className="flex flex-col">
      <label className="font-Roboto font-bold">Time</label>
      <div className="mr-5 flex flex-col w-[216px] items-center h-[52px] gap-5 rounded-md border-solid border-white-700 border-[1px] bg-slate-50 px-[0.75rem]">
        <input
          className="rounded-md w-[200px] h-[52px] border-black border-1px"
          id="party"
          type="datetime-local"
          name="partydate"
          value="2024-06-01T08:30"
          onChange={(e) => setDateDriver(e.target.value)}
        />
      </div>
    </div>
  );
};

export default DateTimeDriver;
