import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';
function ListGroupCar () {

  
  const [groupCars, setGroupCars] = useState([]);
  const {userId} = useParams();
  
  useEffect(()=>{
    loadGroupCar();
  }, [])
    
  

  const loadGroupCar = async ()=>{
      const result = await axios.get("http://localhost:8080/public/groupCars");
      setGroupCars(result.data);
  }
  return (
    <div>
      

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            {groupCars.map((groupCar)=>{
                if(groupCar.customers.some((customer)=>customer.id==userId)==true){
                console.log(groupCar.customers.some((customer)=>customer.id==userId))
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
                )}
            })}
            
        </tbody>
    </table>
</div>

    </div>
  )
}

export default ListGroupCar;