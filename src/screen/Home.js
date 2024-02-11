import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Row from '../components/Row'
import Login from './Login'
import request from '../request'

function Home() {
  return (
    <div>
        <Navbar/>
        <Main/>
        <Row title={'Upcoming'} fetchURL={request.requestUpcoming}/>
        <Row title={'Top-Rated'} fetchURL={request.requestTopRated}/>
        <Row title={'Trending'} fetchURL={request.requestTrending}/>
        <Row title={'Horror'} fetchURL={request.requestHorror}/>
        <Row title={'Popular'} fetchURL={request.requestPopular}/>
        
    </div>
  )
}

export default Home