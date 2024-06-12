import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import { IoIosCloseCircle } from "react-icons/io";
function SearchGroupCar () {
  const [groupCarObject, setGroupCarObject] = useState ({})
  const [check, setCheck] = useState(false);
  const { groupCarAndUserString } = useParams();
  const [groupCars, setGroupCars] = useState([]);
  const [groupCarDetail, setGroupCarDetail] = useState({});
  const [userObject, setUserObject] = useState({});
  let count = 0;
  useEffect(()=>{
    loadGroupCar();
  }, [])
    
  useEffect(() => {
    let groupCarAndUserObject;
    try {
      if (groupCarAndUserString) {
        groupCarAndUserObject = JSON.parse(decodeURIComponent(groupCarAndUserString));
        const { groupCar, user  } = groupCarAndUserObject;
        // addOwnerTrip(user, groupCarData
        // axios.post(`http://localhost:8080/public/addCustomer/${user.id}/${groupCarData.groupId}`);
        console.log("groupCardata >>> ", groupCar)
        console.log("userId >>>> ", user.id)
        setGroupCarObject(groupCar)
        setUserObject(user)

      }
    } catch (error) {
      console.error('Failed to parse combinedDataString:', error);
    }
  }, [groupCarAndUserString]);
  const loadGroupCar = async ()=>{
      const result = await axios.get(`http://localhost:8080/public/groupCars`);
      setGroupCars(result.data);
  }
  const handleJoin = async (groupId) => {
    try {
      await axios.post(`http://localhost:8080/public/addCustomer/${userObject.id}/${groupId}`);
      // Alert join successful
      alert('Join successfully');
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
  const formatDate = (dateString) => {
    const newDate = new Date(dateString);
    return newDate.toLocaleString();
  };
  const handleMembers = (id) => {
    setCheck(!check);
    setGroupCarDetail({ ...groupCarDetail, groupId: id }); // Ensure groupCarDetail is updated
  };
  const filteredGroupCars = groupCars.filter((groupCar) => {
    
    return groupCar.startPoint.trim() === groupCarObject.startPoint.trim() || groupCar.endPoint.trim() === groupCarObject.endPoint.trim(); 
});
  return (
    <div className='flex'>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mx-auto">
    <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
           
            
            <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                    </li>
                </ul>
                <div className="py-1">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                </div>
            </div>
        </div>
        <label for="table-search" className="sr-only">Search</label>
        
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
            {filteredGroupCars.map((groupCar)=>{
     
                return(
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
                  </tr>
                
                )
                
            })}
            
        </tbody>
    </table>
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
{/* list Search
<div class="w-[30%] max-w-screen-xl mx-auto px-6">
        <div class="flex justify-center p-4 px-3 py-10">
            <div class="w-full max-w-md">
                <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div class="block text-gray-700 text-lg font-semibold py-2 px-2">
                        Search following by
                    </div>
                    
                    <div class="py-3 text-sm">
                        
                        <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span  class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">Start Point</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">Start Point</div>
                        </div>

                        <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span  class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">End Point</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">End Point</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>     */}
           
    </div>
  )
}

export default SearchGroupCar;