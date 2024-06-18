import React, { useEffect, useState} from "react";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import tradition2 from "../../assets/images/bg_tradition2.png";
import Input_Tradition from "../../component/layouts/components/Input_Tradition";
import DriverType from "../../component/layouts/components/driverType";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-dropdown-select";
import { FaCar } from "react-icons/fa"; 
import * as UserService from "../../service/UserService";

function Bookingcarpool(props) {
  
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
  const [user, setUser] = useState({});
  
  const fetchProfileInfo = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await UserService.getYourProfile(token);
      console.log(response);
      setUser(response.account);
    } catch (error) {
      console.error("Error fetching profile information:", error);
    }
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  
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
      <div>
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
              <Link to={`/mytrip/${user.accountId}`} className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-red-300 text-white-500">
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