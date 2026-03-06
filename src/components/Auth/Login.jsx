import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setemail("")
        setpassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20' >
            <form 
            onSubmit={
                (e)=>{
                    submitHandler(e)
                }
            }
            
            className='flex flex-col items-center justify-center'>
                <input 
                value = {email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required className= ' text-white outline-none border-2 bg-transparent border-emerald-600 placeholder:text-grey-400 rounded-full py-4 px-5' type="email" placeholder='Enter Your Email' />
                <input 
                value = {password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}required className= ' text-white outline-none border-2 bg-transparent border-emerald-600 placeholder:text-grey-400 rounded-full py-4 px-5 mt-3'  type="password" placeholder='Enter Password' />
                <button className= ' mt-5 text-white outline-none border-none bg-emerald-600 placeholder:text-white rounded-full py-4 px-5' >Log In</button>
            </form>
        </div>
        
    </div>
  )
}

export default Login