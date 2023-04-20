import Navbar from "./HomePage/Navbar";
import Banner from "./HomePage/Banner";
import Row from "./HomePage/Row";
import {banner,originals,romance,toprated,trending} from "./constants/url"
import React from 'react'
import EndInfo from "./LoginPage/EndInfo";
import {auth} from '../firebase-config' 
import {redirect} from 'react-router-dom'
function LandingPage() {

  if(!auth){
    return redirect ("/signin")
  }

  return (
    <div>
      <Navbar/>
      <Banner url={banner}/>
      <Row url={originals} title='Netflix Orginals'/>
      <Row url={romance} title='Romance' isSmall/>
      <Row url={trending} title='Trending'isSmall/>
      <Row url={toprated} title='Top Rated'isSmall/>

      <EndInfo backgroundColor={"black"}/>
    </div>
  )
}

export default LandingPage