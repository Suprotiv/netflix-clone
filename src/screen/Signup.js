import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Authcontext'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'


function Signup() {

  const {user,signup}=useAuth()
  const[email,setEmail]=useState()
  const[password,setPassword]=useState()
  const[cpassword,setCPassword]=useState()
  const navigate=useNavigate()
  const [error,setError]=useState()

  const submit = async (e) => {
    e.preventDefault();

    if(password===cpassword){
    try {
      await signup(email, password);
      setDoc(doc(db, 'users', email), {
        savedShows: []
    })
      navigate('/')
    } catch (error) {
      setError(error);
    }
  }
  else{
    setError({message:'Firebase: Password doesnt match !'})
  }
  };
  
  
   
  return (
    <div> 
      <Navbar/>
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
              <h1 className='text-3xl font-bold flex justify-center my-3'>Sign Up</h1>
              {
                  error ?<p className='bg-red-900 text-white p-3 rounded'>Error : {(error?.message).slice(9,)}</p>:null
              }
          <form className='w-full flex flex-col  py-4' onSubmit={submit}>
            <input className='bg-gray-600 py-2 my-2 px-2' placeholder='Enter email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            <input className='bg-gray-600 py-2 my-2 px-2' placeholder='Enter password' value={password} onChange={(e)=>setPassword(e.target.value)} type='password'></input>
            <input className='bg-gray-600 py-2 my-2 px-2' placeholder='Confirm password' value={cpassword} onChange={(e)=>setCPassword(e.target.value)} type='password'></input>
            <button className='bg-red-600 py-4 my-4 rounded' >Sign up</button>
            <div className='flex justify-between'>
            <p className='flex items-center'><input type='checkbox' className='mr-2'></input> 
            <p className='text-sm'>Remember me </p>
            </p>
            <p className='text-sm'>Need Help ?</p>
            </div>
            <p className='text-md my-10 mx-8'><span className='text-gray-600 mx-2'>Already have an account ?</span><Link to='/login'>Sign in</Link></p>
          </form>
            
          
        </div>
        </div>
        </div>
       </div>
    
    </div>
  )
}

export default Signup