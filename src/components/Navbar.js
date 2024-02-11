import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-between p-4 w-full z-[100] absolute '>
        <h1 className='text-red-600 text-5xl cursor-pointer '>NETFLIX</h1>
        <div >
        <button className='text-white mx-4 cursor-pointer '>Sign in</button>
        <button className='bg-red-600 text-white px-2 py-1 rounded cursor-pointer '>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar