import React, { useEffect, useState } from "react";
import { MapIcon } from "@heroicons/react/24/solid";
import { thisMonthTrip, thisYearTrip, todayTrip } from "../../service/AdminDashboard/TripCardData";

export function TripBoard() {
  const [trip, setTrip] = useState(0);
  const [type, setType] = useState("Day");

  useEffect(() => {
    if (type === "Day") {
      fetchTodayTrip();
    } else if (type === "Month") {
        fetchMonthTrip();
    } else if (type === "Year") {
        fetchYearTrip();
    }
  }, [type]);

  const fetchTodayTrip= async () => {
    try {
      const response = await todayTrip();
      setTrip(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchMonthTrip = async () => {
    try {
      const response = await thisMonthTrip();
      setTrip(response);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchYearTrip = async () => {
    try {
      const response = await thisYearTrip();
      setTrip(response);
    } catch (error) {
      console.log(error);
    }
  };

  const Trip = ({ value }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div className="bg-white rounded-lg shadow-md p-4 relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <MapIcon className="w-6 h-6 text-gray-700 mr-2" />
            <p className="text-xl font-semibold">Trips</p>
          </div>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div>{value}</div>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          <ul className="py-1">
            <li>
              <button
                className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  type === "Day" ? "font-bold text-gray-900" : "text-gray-700"
                }`}
                onClick={() => setType("Day")}
              >
                Day
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  type === "Month" ? "font-bold text-gray-900" : "text-gray-700"
                }`}
                onClick={() => setType("Month")}
              >
                Month
              </button>
            </li>
            <li>
              <button
                className={`w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  type === "Year" ? "font-bold text-gray-900" : "text-gray-700"
                }`}
                onClick={() => setType("Year")}
              >
                Year
              </button>
            </li>
          </ul>
        </div>
        )}
      </div>
    );
  };

  return (
        <div className="bg-white rounded-lg shadow-md p-4 w-60">
          <Trip value={trip} />
      </div>
  );
}

export default TripBoard;
