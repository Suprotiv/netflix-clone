import React, { useEffect, useState } from 'react'
import {FaHeart,FaRegHeart} from 'react-icons/fa'
import { useAuth } from '../context/Authcontext'
import { arrayRemove, arrayUnion, updateDoc ,doc, getDoc} from 'firebase/firestore'
import { db } from '../firebase'

function Movie({item}) {

    const{user}=useAuth()
    const[like,setLike]=useState(false)
    const[saved,setSaved]=useState(false)
    const [savedShows, setSavedShows] = useState([]);
    const movieID = doc(db, 'users', `${user?.email}`);

    useEffect(() => {
      // Function to fetch savedShows array from Firestore
      const fetchSavedShows = async () => {

        if (user?.email) {
          const docSnap = await getDoc(movieID);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            const shows = userData.savedShows || []; // Get savedShows array from Firestore
            setSavedShows(shows);
            // Check if the current movie is present in savedShows
            const isMovieLiked = shows.some((show) => show.id === item.id);
            setLike(isMovieLiked);
          }
        }
      };
  
      fetchSavedShows();
    }, [item.id, movieID, user?.email]);
  

    const favourites= async ()=>{
      if (user?.email) {
        let m=!like
        console.log(m)
        await setLike(m);
        console.log(like)
        if(!like){
        await updateDoc(movieID, {
          savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
       
      }
      else {
        await updateDoc(movieID, {
          savedShows: arrayRemove({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
          }),
        });
        alert(`${item.title} removed from  your watchlist !`)
      }
        
      
      } else {
        alert('Please log in to save a movie');
      }
    }

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[300px] inline-block cursor-pointer relative p-2'>
    <img src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}/>

<div className='absolute w-full h-full left-0 top-0 bg-black opacity-0 hover:opacity-80'>
    <p className='text-white flex items-center justify-center text-center whitespace-normal h-full'>{item?.title}</p>
    <p className='text-white' onClick={favourites}>
        {like ?<FaHeart className='absolute top-4 left-4 text-grey-300'/>:<FaRegHeart className='absolute top-4 left-4 text-grey-300'/>}
    </p>
</div>

</div>
  )
}

export default Movie