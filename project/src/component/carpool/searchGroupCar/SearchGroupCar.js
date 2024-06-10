import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
function SearchGroupCar () {
    //card 
    const customers = [
        {
          name: "Tania Andrew",
          email: "tania@gmail.com",
          price: 400,
          image:
            "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        },
        {
          name: "John Micheal",
          email: "john@gmail.com",
          price: 420,
          image:
            "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
        },
        {
          name: "Alexa Liras",
          email: "alexa@gmail.com",
          price: 340,
          image:
            "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        },
        {
          name: "Richard Gran",
          email: "richard@gmail.com",
          price: 520,
          image:
            "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        },
        {
          name: "Micheal Levi",
          email: "levi@gmail.com",
          price: 780,
          image:
            "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        },
      ];
    //
  
  const [groupCars, setGroupCars] = useState([]);
  const [selectSearch, setSelectSearch] = useState('StartPoint')
  let count = 0;
  useEffect(()=>{
    loadGroupCar();
  }, [selectSearch])
    
  const {groupCarAndUserString} = useParams();
  let groupCarAndUserObject;
  try {
    groupCarAndUserObject = JSON.parse(decodeURIComponent(groupCarAndUserString));
  } catch (error) {
    console.error("Failed to parse combinedDataString:", error);
    return <div>Error: Invalid data</div>;
  }
  const { groupCar: groupCarObject, user: userObject } = groupCarAndUserObject;
  console.log('userObject --> ', userObject)
  console.log("groupCarObject.startPoint >>> ", groupCarObject.startPoint);
  const loadGroupCar = async ()=>{
      const result = await axios.get(`http://localhost:8080/public/groupCars`);
      setGroupCars(result.data);
  }
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
                <th scope="col" className="px-6 py-3">
                    GroupId
                </th>
                <th scope="col" className="px-6 py-3">
                    Start Point
                </th>
                <th scope="col" className="px-6 py-3">
                    End Point
                </th>
                <th scope="col" className="px-6 py-3">
                    TimeStart
                </th>
                <th scope="col" className="px-6 py-3">
                    Members
                </th>
                <th scope="col" className="px-6 py-3">
                    Capacity
                </th>
                <th scope="col" className="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Edit
                </th>
                <th scope="col" className="px-6 py-3">
                    Join
                </th>
                
            </tr>
        </thead>
        <tbody>
            {filteredGroupCars.map((groupCar)=>{
     
                return(
                  <tr key={groupCar.groupId} className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="px-6 py-4">
                    {groupCar.groupId}
                  </td>
                  <td className="px-6 py-4">
                    {groupCar.startPoint}
                  </td>
                  <td className="px-6 py-4">
                    {groupCar.endPoint}
                  </td>
                  <td className="px-6 py-4">
                    {groupCar.timeStart}
                  </td>
                  <td className="px-6 py-4">
                    {groupCar.capacity}
                  </td>
                  <td className="px-6 py-4">
                    {groupCar.customers.length}
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                  </td>
                  <td className="px-6 py-4">
                    <a href="#" className="font-medium text-orange-600 dark:text-blue-500 hover:underline">Join</a>
                  </td>
                  </tr>
                
                )
                
            })}
            
        </tbody>
    </table>
</div>




{/* list Search */}
<div class="w-[30%] max-w-screen-xl mx-auto px-6">
        <div class="flex justify-center p-4 px-3 py-10">
            <div class="w-full max-w-md">
                <div class="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                    <div class="block text-gray-700 text-lg font-semibold py-2 px-2">
                        Search following by
                    </div>
                    
                    <div class="py-3 text-sm">
                        
                        <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span onClick={()=>setSelectSearch('StartPoint')} class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">Start Point</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">Start Point</div>
                        </div>

                        <div class="flex justify-start cursor-pointer text-gray-700 hover:text-blue-400 hover:bg-blue-100 rounded-md px-2 py-2 my-2">
                            <span onClick={()=>setSelectSearch('EndPoint')} class="bg-green-400 h-2 w-2 m-2 rounded-full"></span>
                            <div class="flex-grow font-medium px-2">End Point</div>
                            <div class="text-sm font-normal text-gray-500 tracking-wide">End Point</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>    
           
    </div>
  )
}

export default SearchGroupCar;