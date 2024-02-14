import React, { useEffect, useState } from 'react'
import{IoCloseSharp} from 'react-icons/io5'
import { useAuth } from '../context/Authcontext'
import { arrayRemove, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'
import { Navigate, useNavigate } from 'react-router-dom'

function SavedShows({item}) {

    const {user}=useAuth()
    const[check,setCheck]=useState(true)
    const movieID = doc(db, 'users', `${user?.email}`);
    const navigate=useNavigate()

    const removeData=(async ()=>{
        console.log("hello")
        

        await updateDoc(movieID, {
            savedShows: arrayRemove({
              id: item.id,
              title: item.title,
              img: item.img,
            }),
          });  
          setCheck(false)
        
    })
 
  return (
    <>
    {
    check ?
    <div className='w-[180px] sm:w-[200px] md:w-[240px] lg:w-[350px] inline-block cursor-pointer relative p-2'>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.img}`}/>

<div className='absolute w-full h-full left-0 top-0 bg-black opacity-0 hover:opacity-80'>
    <p className='text-white flex items-center justify-center text-center whitespace-normal h-full'>{item?.title}</p>
    <p className='text-white' >
     <IoCloseSharp className='absolute top-4 right-4 text-grey-300 text-2xl' onClick={removeData}/>
    </p>
   
</div>

</div> :null
    }
    </>
  )
}

export default SavedShows