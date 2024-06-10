import React, { useState } from "react";
import images from "../../assets/icons/logo.svg";
import { BsPersonCircle } from "react-icons/bs";
import CarType from "../../component/layouts/components/carType";
import tradition2 from "../../assets/images/bg_tradition2.png";
import Input_Tradition from "../../component/layouts/components/Input_Tradition";
import Input_Tradition_Date from "../../component/layouts/components/Input_Tradition_Date";
import DriverType from "../../component/layouts/components/driverType";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-dropdown-select";
import { RiMotorbikeFill } from "react-icons/ri";
import { FaCar } from "react-icons/fa"; 

function Bookingcarpool(props) {
  
  // type card

  const [carType, setCarType] = useState([{
    label: "",
    value: 0,
    icon: ""
  }]);
  const options = [
    { label: "4 seater Car", value: 4, icon: <FaCar /> },
    { label: "6 Seater Car", value: 6, icon: <FaCar /> },
  ];
  
  console.log("option--> " , carType[0].value)

  const customItemRenderer = ({ item, methods }) => (
    <div
      onClick={() => methods.addItem(item)}
      className="flex items-center cursor-pointer p-2 gap-5"
    >
      <span className="mr-2">{item.icon}</span>
      {item.label}
    </div>
  );
  //end type card
  


  let navigate = useNavigate();
  const [values, setValues] = useState([])
  const [user, setUser] = useState({ id: 9});
  console.log("userId >>>> ", user.id)
  const [groupCar, setGroupCar] = useState({
    startPoint: "",
    endPoint: "",
    timeStart: "",
    customers:[],
    capacity:0
  });

  const handleChangeCapacity = (values) => {
      setGroupCar({...groupCar, capacity: values[0].value})
  }
  const onInputChange = (e) => {
    setGroupCar({...groupCar, [e.target.name]: e.target.value})
  }
  
  const groupCarAndUser = {groupCar, user}
  const groupCarAndUserString = encodeURIComponent(JSON.stringify(groupCarAndUser));
  const userString = encodeURIComponent(JSON.stringify(user));
  const onSubmit = async (e) => { 
    e.preventDefault();
    await axios.post("http://localhost:8080/public/addGroupCar", groupCar);
    navigate(`/listGroupCar/${userString}`)
  };

  const { startPoint, endPoint, timeStart, capacity } = groupCar;

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
          {" "}
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
        <div className=" flex flex-col items-center rounded-[20px] w-[1550px] h-[200px] bg-white-500  justify-center">
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
              value={startPoint}
              onChange={(e) => onInputChange(e)}
            ></Input_Tradition>
            <Input_Tradition
              label={"End Point"}
              placeholder={"Nhập nơi đến"}
              setEnd={(value) => setGroupCar({ ...groupCar, endPoint: value })}
              name="endPoint"
              value={endPoint}
              onChange={(e) => onInputChange(e)}
            ></Input_Tradition>
            <div className="flex flex-row gap-10">
              <Input_Tradition_Date
                label={"Time Start"}
                name="timeStart"
                value={timeStart}
                onChange={(e) => onInputChange(e)}
              ></Input_Tradition_Date>
            </div>
            <div className="flex items-center">
              <div className="w-[199px] border-white-700 border-solid">
                <label className="font-Roboto font-bold ">Select an Item</label>
                <Select
                options={options}
                labelField="label"
                valueField="value"
                name="capacity"
                value={capacity}
                onChange={(values) => handleChangeCapacity(values)}
        
                className="w-[199px] h-[52px] rounded-md text-bold flex text-center  font-Roboto font-semibold"
                itemRenderer={customItemRenderer}
      />
    </div>
            </div>
            <div className="flex mt-8 flex-col justify-center">
              <Link to={`/SearchGroupCar/${groupCarAndUserString}`} className=" flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-orange-300 text-white-500">
                Search
              </Link>
            </div>
            <div className="flex mt-8 flex-col justify-center">
              <Link to={`/listGroupCar/${userString}`}  type="submit" 
              onClick={(e) =>{ onSubmit(e)}} className=" flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-blue-300 text-white-500">
                Create
              </Link>
            </div>
            <div className="flex mt-8 flex-col justify-center">
              <Link to={`/mytrip/${user.id}`} className=" flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-red-300 text-white-500">
                My trip
              </Link>
            </div>
          </div>
        </div>
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

export default Bookingcarpool;
