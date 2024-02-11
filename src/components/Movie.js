import React, { useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'

function Movie({item}) {

    const[like,setLike]=useState(false)

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block cursor-pointer relative p-2'>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}/>

<div className='absolute w-full h-full left-0 top-0 bg-black opacity-0 hover:opacity-80'>
    <p className='text-white flex items-center justify-center text-center whitespace-normal h-full'>{item?.title}</p>
    <p className='text-white'>
        {like ?<FaHeart className='absolute top-4 left-4 text-grey-300'/>:<FaRegHeart className='absolute top-4 left-4 text-grey-300'/>}
    </p>
</div>

</div>
  )
}

export default Movie