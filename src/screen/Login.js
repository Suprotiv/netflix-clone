import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'

function Login() {
  const{user,login}=useAuth()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const navigate=useNavigate()
  const [error,setError]=useState()

  const loginUser= async(e)=>{
    e.preventDefault()
    try{
    await login(email,password)
    navigate('/')
    }catch(error)
    {
      setError(error)
      console.log(error)
    }
  }

  return (
    <div> <Navbar/>
    
    <div className='w-full h-screen'>
        <img
          className='hidden sm:block absolute w-full h-full object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold flex justify-center my-3'>Sign In</h1>
              {
                  error ?<p className='bg-red-900 text-white p-3 rounded'>Error : {(error?.message).slice(22,(error?.message).length-2)}</p>:null
              }
          <form onSubmit={loginUser} className='w-full flex flex-col  py-4'>
            <input className='bg-gray-600 py-2 my-2 px-2' placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}></input>
            <input className='bg-gray-600 py-2 my-2 px-2' type='password' placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}></input>
            <button className='bg-red-600 py-4 my-4 rounded'>Sign in</button>
            <div className='flex justify-between'>
            <p className='flex items-center'><input type='checkbox' className='mr-2'></input> 
            <p className='text-sm'>Remember me </p>
            </p>
            <p className='text-sm'>Need Help ?</p>
            </div>
            <p className='text-md my-10 '><span className='text-gray-600 mx-2'>New to Netflix ?</span><Link to='/signup'>Sign up</Link></p>
          </form>
            
          
        </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default Login