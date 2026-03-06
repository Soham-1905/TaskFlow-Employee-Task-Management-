 import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
 
 const CreateTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    const [taskTitle, settaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [category, setcategory] = useState('')
    const [taskDate, settaskDate] = useState('')
    const [newtask, setnewtask] = useState('')
    const SubmitHandler = (e)=>{
        e.preventDefault()
        setnewtask({taskTitle, taskDescription, taskDate, category, active:false, new: true, failed : false, completed :false})
        const data =userData
        
        data.forEach(function(elem){
            if (assignTo == elem.firstName){
                elem.tasks.push(newtask)
                elem.taskCount.new = elem.taskCount.new +1 
              }
        })
        setUserData(data)
        console.log(userData)
        setassignTo('')
        setcategory('')
        settaskDate('')
        settaskDescription('')
        settaskTitle('')

    }
    return (
     <div className='p-5 bg-[#1C1C1C] mt-5 rounded'>
            <form onSubmit={(e)=>{
                SubmitHandler(e)
            }} className='flex items-start flex-wrap w-full justify-between'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input value={taskTitle} onChange={(e)=>{
                            settaskTitle(e.target.value)
                        }} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make A UI Design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input  value={taskDate} onChange={(e)=>{
                            settaskDate(e.target.value)
                        }}className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                        <input  value={assignTo} onChange={(e)=>{
                            setassignTo(e.target.value)
                        }}className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee Name'/>
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input  value={category} onChange={(e)=>{
                            setcategory(e.target.value)
                        }}className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design, Dev. etc' />
                    </div>
                </div>
                   
                <div className='w-2/5 flex flex-col items-start'><h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea  value={taskDescription} onChange={(e)=>{
                            settaskDescription(e.target.value)
                        }}className='w-full  h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
                
                
            </form>
        </div>
   )
 }
 
 export default CreateTask