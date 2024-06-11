import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
function ListGroupCar() {
  let navigate = useNavigate();
  const [userObject, setUserObject] = useState({});
  const [groupCars, setGroupCars] = useState([]);
  const [groupIdDetail, setGroupIdDetail] = useState(null);
  const [groupCarDetail, setGroupCarDetail] = useState({});
  const [customersDetail, setCustomersDetail] = useState([]);
  const [check, setCheck] = useState(false)
  const { userString } = useParams();
  useEffect(() => {
    try {
      const decodedUserString = decodeURIComponent(userString);
      setUserObject(JSON.parse(decodedUserString));
    } catch (error) {
      console.error("Failed to parse userString:", error);
      // Handle error parsing userString
    }
  }, [userString]);
  console.log("userObject >>>>", userObject)
  useEffect(() => {
    loadGroupCar();
  }, []);

  useEffect(() => {
    if (groupIdDetail !== null) {
      loadGroupCarByGroupId(groupIdDetail);
    }
  }, [groupIdDetail]);

  useEffect(() => {
    
    if (groupCarDetail.customers) {
      setCustomersDetail(groupCarDetail.customers);
    }
    
  }, [groupCarDetail.customers]);

  
  
  const handleMembers = (id) => {
    setCheck(!check)
    setGroupIdDetail(id);
  };
  // const handleJoin = async (groupId) => {
  //   try{
  //     await axios.post(`http://localhost:8080/public/addCustomer/${userObject.id}/${groupId}`)
  //   }catch(error){
  //     alert("Join fail")
  //   }
  // }
  const loadGroupCar = async () => {
    const result = await axios.get(`http://localhost:8080/public/groupCars`);
    setGroupCars(result.data);
  };

  const loadGroupCarByGroupId = async (groupId) => {
    const result = await axios.get(`http://localhost:8080/public/groupCarById/${groupId}`);
    setGroupCarDetail(result.data);
  };

  const formatDate = (dateString) => {
    const newDate = new Date(dateString);
    return newDate.toLocaleString();
  };
  console.log(groupCarDetail.customers)
  return (
    <div className='flex'>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div></div>
          <label htmlFor="table-search" className="sr-only">Search</label>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                        // onClick={handleJoin(groupCar.groupId)}
                      >
                        Join
                      </button>
                    </td>
                  </tr>

            ))}
          </tbody>
        </table>
      </div>

      {/* List Search */}
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
      </div>
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
