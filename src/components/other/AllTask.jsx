import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
    const [userData,setUserData] = useContext(AuthContext)
    return (
    
    <div className='p-5 bg-[#1C1C1C] mt-5 h-60 rounded '>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded' >
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>Active Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>New Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed </h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
        </div>
        <div id = 'AllTask' className='h-[80%] overflow-auto'>
        {userData.map(function(elem, idx){
            return  <div key={idx} className='border-2 border-emerald-500 bg-transparent mb-2 py-2 px-4 flex justify-between rounded' >
            <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCount.active}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCount.new}</h5>
            <h5 className='text-lg font-medium w-1/5 text-white-'>{elem.taskCount.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
            
        </div>
        })}</div>
    </div>
  )
}

export default AllTask