import React from 'react'
import Banner from '../HomePage/Banner'
import Navbar from '../HomePage/Navbar'
import { drama, toprated, tv}  from '../constants/url'
import Row from '../HomePage/Row'
import EndInfo from '../LoginPage/EndInfo'
function TvShows() {
  return (
    <div>
      <Navbar/>
      <Banner url={tv} />
      <Row url={tv} title={'Popular'}/>
      <Row url={toprated} title={'Trending Now'} isSmall/> 
      <Row url={drama} title={'Drama'}isSmall/>
      <EndInfo backgroundColor={"black"} isSmall/>
    </div>
  )
}

export default TvShows