import React from 'react'
import Banner from '../HomePage/Banner'
import Navbar from '../HomePage/Navbar'
import {kids, rRated2, theatreMovies,tomCruise,trending}  from '../constants/url'
import Row from '../HomePage/Row'
import EndInfo from '../LoginPage/EndInfo'
function TvShows() {
  return (
    <div>
       <Navbar/>
       <Banner url={theatreMovies} />
        <Row url={theatreMovies} title={'Top Theatre Movies'}/>
        <Row url={trending} title='Trending' isSmall/>
        <Row url={kids} title={'Movies for Kids'} isSmall/>
        <Row url={tomCruise} title={'Best of Tom Cruise'}isSmall/>
        <Row url={rRated2} title={'Highest Grossing R Rated'}isSmall/> 
        <EndInfo backgroundColor={"black"}/>
    </div>
  )
}

export default TvShows