import React, { useEffect, useState, useRef } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./App.css"
import LeafletGeocoder from '../map/LeafletGeocoder';
import LeafletRoutingMachine from '../map/LeafletRoutingMachine';
import * as TransactionService from '../../../service/TransactionService'

function ListGroupCar() {
  const [userObject, setUserObject] = useState({});
  const [groupCars, setGroupCars] = useState([]);
  const [groupCarDetail, setGroupCarDetail] = useState({});
  const [check, setCheck] = useState(false);
  const { groupCarAndUserString } = useParams();
  // map start //
  const UpdateMapCenter = ({ position }) => {
    const map = useMap();
    map.setView(position);
    return null;
  };
  let groupCarData={};
  let DefaultIcon = L.icon({
    iconUrl: "/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  const [startPoint, setStartPoint] = useState(null);
  const [endPoint, setEndPoint] = useState(null);
  const [routeInfo, setRouteInfo] = useState("");
  const [position, setPosition] = useState([16.047079, 108.20623]); // initial map center
  const mapRef = useRef();
  const [distance, setDistance] = useState(0);
  const [resrep, setResrep] = useState({
    startPoint: startPoint,
    endPoint: endPoint,
    timeStart: '',
    account: {},
    driverDetail: {},
    amount: "",
    paymentMethod: '',
    driverType: ''
  });
  const handleRouteFound = (summary) => {
    setDistance((summary.totalDistance / 1000).toFixed(2));
    setResrep({ ...resrep, amount: (summary.totalDistance / 1000).toFixed(2)*10000 });
    const time = (summary.totalTime / 60).toFixed(2) + " minutes";
    setRouteInfo(`Distance: ${distance}, time: ${time}`);
  };

  const handleSubmit = async (e) => {
    try {
      const token = localStorage.getItem("token");
      await TransactionService.addTrans(resrep);
    } catch (error) {
      console.error( error);
    }
  };

  const geocodeAddress = (address, callback) => {
    const geocoder = L.Control.Geocoder.nominatim();
    geocoder.geocode(address, (results) => {
      if (results.length > 0) {
        const { center } = results[0];
        setPosition([center.lat, center.lng]); // Update map center
        callback(center);
      } else {
        alert("Address not found");
      }
    });
  };
  
  useEffect(()=>{
    console.log("routeInfo >>>> ",routeInfo)
  },[routeInfo])
  const handleSearchClick = () => {
    if (startPoint && endPoint) {
      // Get the map instance from the ref
      const map = mapRef.current;

      // Initialize the routing machine to find the route and update the info
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
  // map end //
  useEffect(() => {
    let groupCarAndUserObject;
    try {
      if (groupCarAndUserString) {
        groupCarAndUserObject = JSON.parse(decodeURIComponent(groupCarAndUserString));
        const { groupCarData, user } = groupCarAndUserObject;
        // addOwnerTrip(user, groupCarData)
        // axios.post(`http://localhost:8080/public/addCustomer/${user.id}/${groupCarData.groupId}`);
        console.log("groupCardata >>> ", groupCarData)
        console.log("userId >>>> ", user.accountId)
        setResrep({ ...resrep, account: user });
        setUserObject(user);
        setGroupCarDetail(groupCarData);
        console.log(resrep);
      }
    } catch (error) {
      console.error('Failed to parse combinedDataString:', error);
    }
  }, [groupCarAndUserString]);

 

  // useEffect(()=>{
  //   try{
  //     axios.post(`http://localhost:8080/public/addCustomer/${userObject.id}/${groupCarDetail.groupId}`);
  //     console.log("success add owner")
  //   }catch(error){
  //     console.log("fail add owner >>> ", error)
  //   }
  // }, [])

  useEffect(() => {
    loadGroupCar();
  }, []);

  useEffect(() => {
    if (groupCarDetail?.groupId) {
      loadGroupCarByGroupId(groupCarDetail.groupId);
    }
  }, [groupCarDetail.groupId]);

  const loadGroupCar = async () => {
    try {
      const result = await axios.get(`http://localhost:8080/public/groupCars`);
      setGroupCars(result.data);
    } catch (error) {
      console.error('Failed to fetch group cars:', error);
    }
  };

  const loadGroupCarByGroupId = async (groupId) => {
    try {
      const result = await axios.get(`http://localhost:8080/public/groupCarById/${groupId}`);
      setGroupCarDetail(result.data);
    } catch (error) {
      console.error(`Failed to fetch group car with groupId ${groupId}:`, error);
    }
  };
  const handleShowMap = (groupCar) => {
    geocodeAddress(groupCar.startPoint, (start) => {
      setStartPoint(start);
      geocodeAddress(groupCar.endPoint, (end) => {
        setEndPoint(end);
      setResrep({ ...resrep, startPoint: start, endPoint: end });

      });
    });
  };
  
  useEffect(() => {
    if (startPoint && endPoint) {
      handleSearchClick();
    }
  }, [startPoint, endPoint]);
  
  const formatDate = (dateString) => {
    const newDate = new Date(dateString);
    return newDate.toLocaleString();
  };

  const handleMembers = (id) => {
    setCheck(!check);
    setGroupCarDetail({ ...groupCarDetail, groupId: id }); // Ensure groupCarDetail is updated
  };

  const handleJoin = async (groupId) => {
    try {
      console.log(resrep);
      // await axios.post(`http://localhost:8080/public/addCustomer/${userObject.accountId}/${groupId}`);
      // // Alert join successful
      // alert('Join successfully');
      // Update quantity of the joined groupCar
      const updatedGroupCars = groupCars.map((car) => {
        if (car.groupId === groupId) {
          return {
            ...car,
            quantity: (car.quantity || 0) + 1, // Increase quantity by 1
          };
        }
        return car;
      });
      // Set updated groupCars state
      setGroupCars(updatedGroupCars);
    } catch (error) {
      // Alert join fail
      alert('Join fail');
    }
  };
  

  return (
    <div className='block'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div></div>
          <label htmlFor="table-search" className="sr-only">Search</label>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">GroupId</th>
              <th scope="col" className="px-6 py-3">Start Point</th>
              <th scope="col" className="px-6 py-3">End Point</th>
              <th scope="col" className="px-6 py-3">TimeStart</th>
              <th scope="col" className="px-6 py-3">Members</th>
              <th scope="col" className="px-6 py-3">Driver</th>
              <th scope="col" className="px-6 py-3">Capacity</th>
              <th scope="col" className="px-6 py-3">Quantity</th> 
              <th scope="col" className="px-6 py-3">Join</th>
              <th scope="col" className="px-6 py-3">Show Map</th>

            </tr>
          </thead>
          <tbody>
            {groupCars?.map((groupCar) => (
              
                
                  <tr key={groupCar.groupId} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">{groupCar.groupId}</td>
                    <td className="px-6 py-4">{groupCar.startPoint}</td>
                    <td className="px-6 py-4">{groupCar.endPoint}</td>
                    <td className="px-6 py-4">{formatDate(groupCar.timeStart)}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleMembers(groupCar.groupId)}
                        className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-orange-500 text-white-500"
                      >
                        Members
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-blue-500 text-white-500"
                      >
                        Driver
                      </Link>
                    </td>
                    
                    <td className="px-6 py-4">{groupCar.capacity}</td>
                    <td className="px-6 py-4">{groupCar.customers?.length ?? 0}</td>
                    
                    <td className="px-6 py-4">
                    <button
                        className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-red-500 text-white-500"
                        onClick={()=>handleJoin(groupCar.groupId)}
                      >
                        Join
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        className="flex flex-row w-[180px] font-Roboto font-bold rounded-md justify-center items-center h-[52px] bg-pink-500 text-white-500"
                        onClick={()=>handleShowMap(groupCar)}
                      >
                        Show Map
                      </button>
                    </td>
                  </tr>

            ))}
          </tbody>
        </table>
      </div>

      {/* List Search
      <div className="w-[30%] max-w-screen-xl mx-auto px-6">
        <div className="flex justify-center p-4 px-3 py-10">
          <div className="w-full max-w-md">
            <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
              <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                Search following by
              </div>
              <div className="py-3 text-sm">
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                  <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow font-medium px-2">Start Point</div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide">Start Point</div>
                </div>
                <div className="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                  <span className="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                  <div className="flex-grow font-medium px-2">End Point</div>
                  <div className="text-sm font-normal text-gray-500 tracking-wide">End Point</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* start map */}

      <div className=" flex items-center justify-center z-50 mt-5 mb-5">
      
      
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        ref={mapRef}
        className="w-full h-full md:w-3/4 md:h-3/4 lg:w-1/2 lg:h-1/2"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <div className="absolute top-4 right-4 z-50">
          <IoIosCloseCircle size={30} className="text-red-500 cursor-pointer" />
        </div>
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
    </div>

      {/* end map */}
      {check && <div className="fixed inset-0 flex items-center justify-center z-50 text-center ">
        <Card
          title="Members"
          extra={<IoIosCloseCircle onClick={()=>setCheck(!check)}  style={{width: 20, height: 20}}/>}
          style={{ width: 500, maxWidth: '80%', height: 400 }}
        >
          <div className="overflow-auto h-full">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 w-1/3 text-center">Customer Id</th>
                <th scope="col" className="px-6 py-3 w-1/3 text-center">Customer Name</th>
                <th scope="col" className="px-6 py-3 w-1/3 text-center">Phone</th>
              </tr>
            </thead>
            <tbody>
              {groupCarDetail.customers?.map((customer)=>
                (
                  <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 w-1/3 text-center">{customer.id}</td>
                <td className="px-6 py-4 w-1/3 text-center">{customer.account.name}</td>
                <td className="px-6 py-4 w-1/3 text-center">{customer.account.phone}</td>
                </tr>
              )
                
                 
              )}
                        
            </tbody>
          </table>
        </div>
        </Card>
      </div>}
    </div>
    // card 
    
  );
}

export default ListGroupCar;
