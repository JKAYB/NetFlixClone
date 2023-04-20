import React from 'react'
import "./Navbar.css"
import {useNavigate} from 'react-router-dom'

import{useState,useEffect} from "react"
import {auth} from "../../firebase-config"
import {signOut ,onAuthStateChanged} from "firebase/auth"
function Navbar() {

  const navigate = useNavigate();
  const [user,setUser] = useState({})

  onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser);
  })

  const logout = async() =>{
      await signOut(auth);
      navigate('/signin');
  }
  
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 350 ) {
            setShow(true)
        }else{
          setShow(false)
        }
    }
  
    // const settings = () =>{
    //     navigate('/settings')
    // }
  
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, []);

    let isClicked=true;
    
    const displayUser=()=>{
      if(isClicked){
      document.querySelector(".options").style = "display:block "
      isClicked=false;
      }
      else{
        document.querySelector(".options").style = "display:none"
        isClicked=true;
      }
      }


  return (
    <div className={`navbar ${show && 'navbar-hidden'}`}>
        <a href="/home"><img className="navlogo" 
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
          alt="Netflix-logo" /></a>
        <a className='menu' href='/home' >Home</a>
        <a className='menu' href='/tvshows'>TV shows</a>
        <a className='menu'href='/movies'>Movies</a>
        {/* <a className='menu'href='/home'>My List</a>
        <a className='menu'href='/home'>Browse by Languages</a> */}
        <button className="avatar" onClick={displayUser}/>
        <div className='options'>
          <img className='icon' src= "https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="icon"></img>
        <div className='userLoggedIn'>{user.email}</div>
        <button className='settings'>Settings</button>
        <button onClick={logout}   className='Signout'>SignOut</button>
        </div>
    </div>
    
  )
}

export default Navbar