import React, { useState, useContext, useEffect, useRef } from "react";
import images from "../../assets/icons/logo.svg";
import { BsPersonCircle } from "react-icons/bs";
import CarType from "../../component/layouts/components/carType";
import tradition2 from "../../assets/images/bg_tradition2.png";
import Input_Tradition_Date from "../../component/layouts/components/Input_Tradition_Date";
import DriverType from "../../component/layouts/components/driverType";
import MapBoxMap from "../../component/layouts/Map/MapBoxMap";
import { CartContext } from "../../component/ConText/CartContext";
import Input_Tradition from "../../component/layouts/components/Input_Tradition";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import Driver from "../BookingDriverInvoice/Driver";

import { FaMapMarkerAlt } from "react-icons/fa";

const UpdateMapCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

function BookingTraditionnel(props) {
  const { typeCar } = props;
  const [activePage, setActivePage] = useState("carsPage");

  const [pickup, setPickup] = useState("");
  const [end, setEnd] = useState("");
  const [time, setTime] = useState("");
  const [selectedCarType, setSelectedCarType] = useState(null);
  const [isEdit, setIsEdit] = useState(false);
  const { setTheme } = useContext(CartContext);

  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [routeInfo, setRouteInfo] = useState("");
  const [position, setPosition] = useState([16.047079, 108.20623]); // initial map center
  const mapRef = useRef();

  useEffect(() => {
    setTheme((prev) => ({ ...prev, pickup, end, selectedCarType }));
  }, [pickup, end, setTheme, selectedCarType]);

  const handleCarTypeChange = (value) => {
    setSelectedCarType(value);
  };

  const { theme } = useContext(CartContext);

  const showPage = (pageId) => {
    setActivePage(pageId);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  const handleRouteFound = (summary) => {
    const distance = (summary.totalDistance / 1000).toFixed(2) + " km";
    const time = (summary.totalTime / 60).toFixed(2) + " minutes";
    setRouteInfo(`Distance: ${distance}, Time: ${time}`);
  };

  const geocodeAddress = (address, callback) => {
    const geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(address, (results) => {
      if (results.length > 0) {
        const { center } = results[0];
        setPosition([center.lat, center.lng]); // Update map center
        callback(center);
      }
    });
  };

  const handleSearchClick = () => {
    if (startPoint && endPoint) {
      const map = mapRef.current;
      const routingControl = L.Routing.control({
        waypoints: [L.latLng(startPoint), L.latLng(endPoint)],
        lineOptions: {
          styles: [
            {
              color: "red",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .on("routesfound", function (e) {
          const route = e.routes[0];
          handleRouteFound(route.summary);
        })
        .addTo(map);
    } else {
      alert("Please enter both start and end addresses.");
    }
  };

  return (
    <div
      className="flex items-center flex-col relative justify-center min-h-screen"
      style={{
        backgroundImage: `url(${tradition2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full flex justify-center bg-orange-300">
        <p className="font-Roboto font-bold text-xl">
          111 years of SIXT. 111 years of tradition.
        </p>
      </div>
      <div>
        <div className="">
          <div className="flex flex-row w-[1150px] justify-between gap-[895px] items-center">
            <div className="">
              <img src={images} width={"102px"} alt="logo" className=""></img>
            </div>
            <div className="flex flex-row items-center w-[200px]">
              <BsPersonCircle className="mr-5 text-3xl " />
              <h2 className="font-Roboto font-bold">Đào Bá Anh Quân</h2>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center rounded-[20px] w-[1150px] h-[200px] bg-white-500  justify-center">
          <div className="flex flex-row justify-start w-full gap-5 mb-8 ml-[22px]">
            <div className="driverType" onClick={() => showPage("carsPage")}>
              <DriverType text={"Cars"}></DriverType>
            </div>
            <div className="driverType" onClick={() => showPage("driverPage")}>
              <DriverType
                typeDriver="BsFilePerson"
                text={"Driver"}
              ></DriverType>
            </div>
          </div>
          <div
            id="carsPage"
            className={`page ${
              activePage === "carsPage" ? "block" : "hidden"
            } flex flex-row gap-5`}
          >
            <div className="flex flex-col">
              <label className="font-Roboto font-bold">Pickup</label>
              <div className="mr-5 flex flex-row w-[216px] items-center h-[52px] gap-5 rounded-md border-solid border-white-700 border-[1px] bg-slate-50 px-[0.75rem]">
                <input
                  className="rounded-md w-[200px] h-[40px] border-vien"
                  id="start-input"
                  placeholder="Nhập nơi đi"
                  onChange={(e) => setPickup(e.target.value)}
                  onBlur={(e) => {
                    const address = e.target.value;
                    geocodeAddress(address, setStartPoint);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-Roboto font-bold">Return</label>
              <div className="mr-5 flex flex-row w-[216px] items-center h-[52px] gap-5 rounded-md border-solid border-white-700 border-[1px] bg-slate-50 px-[0.75rem]">
                <input
                  id="end-input"
                  placeholder="Nhập nơi đến"
                  onChange={(e) => setEnd(e.target.value)}
                  onBlur={(e) => {
                    const address = e.target.value;
                    geocodeAddress(address, setEndPoint);
                  }}
                />
              </div>
            </div>
            <div className="flex flex-row gap-10">
              <Input_Tradition_Date
                label={"Pick-up date"}
              ></Input_Tradition_Date>
            </div>
            <div className="flex items-center">
              <CarType onChange={handleCarTypeChange} />
            </div>
            <div className="flex mt-8 flex-col justify-center">
              <button
                className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-orange-300 text-white-500"
                onClick={handleBooking}
              >
                Show Map
              </button>
            </div>
          </div>
          <div
            id="driverPage"
            className={`page ${
              activePage === "driverPage" ? "block" : "hidden"
            }`}
          >
            <Driver></Driver>
          </div>
        </div>
      </div>
      <div className="mt-[100px]">
        {isEdit ? (
          <MapBoxMap
            setIsEdit={setIsEdit}
            isEdit={isEdit}
            pickup={pickup}
            end={end}
            startPoint={startPoint}
            setStartPoint={setStartPoint}
            endPoint={endPoint}
            setEndPoint={setEndPoint}
          />
        ) : null}
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

let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default BookingTraditionnel;
