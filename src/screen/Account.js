import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/Authcontext'
import { onSnapshot,doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Movie from '../components/Movie'
import SavedShows from '../components/SavedShows'

function Account() {

const {user}=useAuth()
const [movies,setMovies]=useState([])
const movieID = doc(db,'users',`${user?.email}`)

useEffect(()=>{
  const fetchSavedShows = async () => {

    if (user?.email) {
      const docSnap = await getDoc(movieID);
      if (docSnap.exists()) {
        const userData = docSnap.data();
        const shows = userData.savedShows || []; // Get savedShows array from Firestore
        setMovies(shows);
      }
    }
  };
  fetchSavedShows()
},[user?.email])
console.log(movies)
  return (


    
    <div> <Navbar/>
     <img
          className='sm:block  w-full h-[500px] object-cover'
          src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
          alt='/'
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <h1 className='text-white absolute text-3xl md:text-5xl font-bold py-5 top-[25%] px-5'>My shows</h1>
        
        <h1 className='text-white text-lg md:text-2xl font-bold  my-1 md:my-8 mx-2'>Watchlist</h1>
        <div className='h-[1000px] w-full'>
        <div className='relative flex items-center'>
        <div>
          
        {movies.length!==0 ?
        movies.map((item,index)=>(
            <SavedShows item={item}/>

        )) : 
        <p className='text-gray-600 text-3xl flex justify-center items-center  h-[20vh] w-[90vw]'>Nothing to show !</p>}

        </div>
        </div>
    </div>
    </div>

  )
}

export default Account