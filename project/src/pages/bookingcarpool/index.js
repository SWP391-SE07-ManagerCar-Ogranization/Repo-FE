import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import images from "../../assets/icons/logo.svg";
import { BsPersonCircle } from "react-icons/bs";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import tradition2 from "../../assets/images/bg_tradition2.png";
import Input_Tradition from "../../component/layouts/components/Input_Tradition";
import DriverType from "../../component/layouts/components/driverType";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-dropdown-select";
import { FaCar } from "react-icons/fa"; 
import LeafletGeocoder from "../../component/carpool/map/LeafletGeocoder";
import LeafletRoutingMachine from "../../component/carpool/map/LeafletRoutingMachine";

// const UpdateMapCenter = ({ position }) => {
//   const map = useMap();
//   map.setView(position);
//   return null;
// };
function Bookingcarpool(props) {
  // Map start 
  // let groupCarData={};
  // let DefaultIcon = L.icon({
  //   iconUrl: "/marker-icon.png",
  //   iconSize: [25, 41],
  //   iconAnchor: [10, 41],
  //   popupAnchor: [2, -40],
  // });
  // L.Marker.prototype.options.icon = DefaultIcon;
  // const [startPoint, setStartPoint] = useState(null);
  // const [endPoint, setEndPoint] = useState(null);
  // const [routeInfo, setRouteInfo] = useState("");
  // const [position, setPosition] = useState([16.047079, 108.20623]); // initial map center
  // const mapRef = useRef();

  // const handleRouteFound = (summary) => {
  //   const distance = (summary.totalDistance / 1000).toFixed(2) + " km";
  //   const time = (summary.totalTime / 60).toFixed(2) + " minutes";
  //   setRouteInfo(`Distance: ${distance}, Time: ${time}`);
  // };

  // const geocodeAddress = (address, callback) => {
  //   const geocoder = L.Control.Geocoder.nominatim();
  //   geocoder.geocode(address, (results) => {
  //     if (results.length > 0) {
  //       const { center } = results[0];
  //       setPosition([center.lat, center.lng]); // Update map center
  //       callback(center);
  //     } else {
  //       alert("Address not found");
  //     }
  //   });
  // };

  // const handleSearchClick = () => {
  //   if (startPoint && endPoint) {
  //     // Get the map instance from the ref
  //     const map = mapRef.current;

  //     // Initialize the routing machine to find the route and update the info
  //     const routingControl = L.Routing.control({
  //       waypoints: [L.latLng(startPoint), L.latLng(endPoint)],
  //       lineOptions: {
  //         styles: [
  //           {
  //             color: "red",
  //             weight: 4,
  //             opacity: 0.7,
  //           },
  //         ],
  //       },
  //       routeWhileDragging: false,
  //       geocoder: L.Control.Geocoder.nominatim(),
  //       addWaypoints: false,
  //       draggableWaypoints: false,
  //       fitSelectedRoutes: true,
  //       showAlternatives: true,
  //     })
  //       .on("routesfound", function (e) {
  //         const route = e.routes[0];
  //         handleRouteFound(route.summary);
  //       })
  //       .addTo(map);
  //   } else {
  //     alert("Please enter both start and end addresses.");
  //   }
  // };
  // map end
  const options = [
    { label: "4 seater Car", value: 4, icon: <FaCar /> },
    { label: "6 Seater Car", value: 6, icon: <FaCar /> },
  ];

  const customItemRenderer = ({ item, methods }) => (
    <div
      onClick={() => methods.addItem(item)}
      className="flex items-center cursor-pointer p-2 gap-5"
    >
      <span className="mr-2">{item.icon}</span>
      {item.label}
    </div>
  );
  let groupCarData = {}
  let navigate = useNavigate();
  const [user, setUser] = useState({ id: 9 });
  
  const [groupCar, setGroupCar] = useState({
    startPoint:"",
    endPoint:"",
    timeStart:"",
    capacity:0
  });

  const handleChangeCapacity = (values) => {
    setGroupCar({ ...groupCar, capacity: values[0].value });
  }

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setGroupCar({ ...groupCar, [name]: value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const { startPoint, endPoint, timeStart, capacity } = groupCar;
    
    if (!startPoint || !endPoint || capacity === 0) {
      alert("Please fill in all required fields.");
      return;
    }
    
    let request = await axios.post("http://localhost:8080/public/addGroupCar", groupCar);
    groupCarData = request.data
    console.log("groupCarData >>> ", groupCarData)
    setGroupCar(groupCarData)
    
    // const userString = encodeURIComponent(JSON.stringify(user));
    navigate(`/listGroupCar/${encodeURIComponent(JSON.stringify({ groupCarData, user }))}`);
  };
  
  return (
    <div
      className="flex items-center h-[600px] flex-col"
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
          <div className="flex justify-between gap-[895px] items-center">
            <div className="">
              <img src={images} width={"102px"} alt="logo" className=""></img>
            </div>
            <div className="flex flex-row items-center">
              <BsPersonCircle className="mr-5 text-3xl" />
              <h2 className="font-Roboto font-bold">{user.id}</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center rounded-[20px] w-[1550px] h-[200px] bg-white-500 justify-center">
          <div className="flex flex-row justify-start w-full gap-5 mb-8 ml-[22px]">
            <DriverType text={"Cars"}></DriverType>
            <DriverType typeDriver="BsFilePerson" text={"Driver"}></DriverType>
          </div>
          <div className="flex flex-row gap-5">
            <Input_Tradition
              label={"Start Point"}
              placeholder={"Nhập nơi đi"}
              setPickup={(value) => setGroupCar({ ...groupCar, startPoint: value })}
              name="startPoint"
              value={groupCar.startPoint}
              onChange={onInputChange}
            />
            <Input_Tradition
              label={"End Point"}
              placeholder={"Nhập nơi đến"}
              setEnd={(value) => setGroupCar({ ...groupCar, endPoint: value })}
              name="endPoint"
              value={groupCar.endPoint}
              onChange={onInputChange}
            />
            <div className="flex flex-row gap-10">
              <Input_Tradition
                label={"Time Start"}
                name="timeStart"
                value={groupCar.timeStart}
                onChange={onInputChange}
                type="datetime-local"
              />
            </div>
            <div className="flex items-center">
              <div className="w-[199px] border-white-700 border-solid">
                <label className="font-Roboto font-bold">Select an Item</label>
                <Select
                  options={options}
                  labelField="label"
                  valueField="value"
                  name="capacity"
                  value={groupCar.capacity}
                  onChange={handleChangeCapacity}
                  required
                  className="w-[199px] h-[52px] rounded-md text-bold flex text-center font-Roboto font-semibold"
                  itemRenderer={customItemRenderer}
                />
              </div>
            </div>
            <div className="flex mt-8 flex-col justify-center">
              <Link to={`/SearchGroupCar/${encodeURIComponent(JSON.stringify({ groupCar, user }))}`} className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-orange-300 text-white-500">
                Search
              </Link>
            </div>
            <div className="flex mt-8 flex-col justify-center">
              <Link to={`/listGroupCar/${encodeURIComponent(JSON.stringify({ groupCarData, user }))}`} onClick={onSubmit} className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-blue-300 text-white-500">
                Create
              </Link>
            </div>
            <div className="flex mt-8 flex-col justify-center">
              <Link to={`/mytrip/${user.id}`} className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-red-300 text-white-500">
                My trip
              </Link>
            </div>
            
          </div>
        </div>
      </div>
      <div className="h-[307px] mt-[310px] w-full flex flex-col bg-orange-300 text-center tightest">
        <span className="text-[72px] font-Roboto font-black pt-[1.5rem] pb-[1.5rem] leading-[72px] tightest">
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

      {/* Map start*/}

      {/* <div className="Map w-[100%]">
      <input
        id="start-input"
        placeholder="đi"
        onBlur={(e) => {
          const address = e.target.value;
          geocodeAddress(address, setStartPoint);
        }}
      />
      <input
        id="end-input"
        placeholder="về"
        onBlur={(e) => {
          const address = e.target.value;
          geocodeAddress(address, setEndPoint);
        }}
      />
      <button onClick={handleSearchClick}>Tìm kiếm</button>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {startPoint && (
          <>
            <Marker position={startPoint}>
              <Popup>Start Point</Popup>
            </Marker>
            <UpdateMapCenter position={startPoint} />
          </>
        )}
        {endPoint && (
          <>
            <Marker position={endPoint}>
              <Popup>End Point</Popup>
            </Marker>
            <UpdateMapCenter position={endPoint} />
          </>
        )}
        <LeafletGeocoder
          setStartPoint={setStartPoint}
          setEndPoint={setEndPoint}
        />
        <LeafletRoutingMachine
          startPoint={startPoint}
          endPoint={endPoint}
          onRouteFound={handleRouteFound}
        />
      </MapContainer>
    </div> */}

      {/* Map end */}
    </div>
  );
}

export default Bookingcarpool;
