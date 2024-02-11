import React, { useEffect, useState } from 'react'
import request from '../request'
import axios from 'axios'



function Main() {

const[movies,setmovies]=useState([])
const[fullstr,setfullstr]=useState(false)
 
useEffect(()=>{
    axios.get(request.requestPopular).then((response)=>{
        setmovies(response.data.results)
    })
},[])



const movie=movies[Math.floor((Math.random())* movies.length)]

const showfullstr = (e) => {
    e.preventDefault();
    setfullstr(true);
};

const replaceString=(str,num)=>{
    if(str?.length>num && !fullstr)
    {
        return (
            <>
            {str.slice(0,num)+'...'}
            <button onClick={showfullstr}>Read more</button>
            </>
            )
    }
    else
        return str;
    
}

console.log(movie)

return (
    <div>
      <div className=' top-0 left-0 w-full h-[80vh] text-white'>
        <div className='w-full h-full'>
            <div className=' absolute w-full h-[80vh]  bg-gradient-to-r from-black'></div>
            <div className='absolute top-[190px] w-[95%] h-[40vh] mx-[2%] my-5'>
                <h1 className='text-white  text-3xl md:text-5xl my-4 font-bold'>{movie?.title}</h1>
                <div className='my-8'>
                    <button className=' border text-black font-bold bg-white border-gray-300 py-2 px-2 '>Play</button>
                    <button className='border text-white border-gray-300  py-2 px-2  mx-5'>Watch later</button>
                </div>
                <p className='text-gray-300 text-sm'>Released on : {movie?.release_date}</p>
                <p className='my-4 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>{replaceString(movie?.overview,150)}</p>

            </div>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        </div>
      </div>
    </div>
  )
}

export default Main