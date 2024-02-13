import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'

function Navbar() {

  const {user,logout}=useAuth()
  const navigate=useNavigate()

  const Logout= async ()=>{
    try{
      await logout()
      navigate('/login')


    }catch(error)
    {
      console.log(error)
    }
  }
  console.log(user)
  return (
    < div >
      { user ? 
        <div className='flex items-center justify-between p-4 w-full z-[100] absolute '>
            <Link to='/'>
          <h1 className='text-red-600 text-5xl cursor-pointer font-semibold'>NETFLIX</h1>
          </Link>
          <div >
          <Link to="/account">
          <button className='text-white mx-4 cursor-pointer '>Account</button>
          </Link>
         
          <button className='bg-red-600 text-white px-2 py-1 rounded cursor-pointer ' onClick={Logout}>logout</button>
    
        
          </div>
        </div>
        :
        <div className='flex items-center justify-between p-4 w-full z-[100] absolute '>
        <Link to='/'>
      <h1 className='text-red-600 text-5xl cursor-pointer font-semibold'>NETFLIX</h1>
      </Link>
      <div >
      <Link to="/login">
      <button className='text-white mx-4 cursor-pointer '>Sign in</button>
      </Link>
      <Link to='/signup'>
      <button className='bg-red-600 text-white px-2 py-1 rounded cursor-pointer '>Sign up</button>
      </Link>
    
      </div>
    </div>
        }
    </div>
  )
}

export default Navbar