import "./Login.css"
import React from 'react';
import LoginSubmit from "./LoginSubmit";
import Head3 from "./Head3";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'


  function Login() {
  
    const [lang,   setLang] = useState("English")

    const navigate = useNavigate();
    const handleNavigate = (()=>{
      navigate('/signin');
    })

  
   let isClicked=true;
    
    const displayLang=()=>{
      if(isClicked){
      document.querySelector(".dropdown-menumain").style = "display:block "
      isClicked=false;
      }
      else{
        document.querySelector(".dropdown-menumain").style = "display:none"
        isClicked=true;
      }
      }
    return (
     <div>
        <div className='backgroundLogin'>
            <div className='navbar1'>
                <a href="/"><img className="navlogo1"
                 src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
                alt="Netflix-logo" /></a>
                 <button className='signin-login' onClick={handleNavigate} >Sign In</button>
                 <div className="dropdownmain">
                      <button className="dropdownbuttonmain" onClick={displayLang} >{lang}</button>
                           <ul className="dropdown-menumain" id="langDrop">
                               <button onClick={()=>{setLang ("English")}} className ="dropdown-lang1main">English</button>
                               <button onClick={()=>{setLang("हिंदी")}}  className="dropdown-lang2main">हिंदी</button>
                          </ul>
                    </div>
            </div>
            <div className='content-login'>
                <pre className='heading1'>Unlimited movies, TV <br/>    shows and more.</pre> 
                <h2 className='heading2'> Watch anywhere. Cancel anytime.</h2>
                <h3 className="Clone">This is a clone website</h3>
                <Head3/>
            </div>
            
               <LoginSubmit/>
             
        </div>
    </div>
    
  )
}

export default Login