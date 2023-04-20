import React from 'react'
import './EndInfo.css'
import { useState } from 'react'
function EndInfo(props) {
  const [lang,   setLang] = useState("English")
  let isClicked=true;
    
    const displayLang=()=>{
      if(isClicked){
      document.querySelector(".dropdown-menu").style = "display:block "
      isClicked=false;
      }
      else{
        document.querySelector(".dropdown-menu").style = "display:none"
        isClicked=true;
      }
      }

  return (
    <div className='endinfo'style={{backgroundColor: `${props.backgroundColor}`}}>
      <p className='contact'>Questions? Call<a className='contactnum' href=' xxxxxx'> 000-800-919-1694</a></p>
      <div className='grid-container'>

                <a className="grid-item" href="xx">FAQ</a>
                <a className="grid-item"href="xx">Help Centre</a>
                <a className="grid-item"href="xx">Account</a>
                <a className="grid-item"href="xx">Media Centre</a>
                <a className="grid-item"href="xx">Invest or Relations</a>
                <a className="grid-item"href="xx">Jobs</a>
                <a className="grid-item"href="xx">Ways to Watch</a>
                <a className="grid-item"href="xx">Terms of Use</a>
                <a className="grid-item"href="xx">Privacy</a>
                <a className="grid-item"href="xx">Cookie Preferences</a>
                <a className="grid-item"href="xx">Corporate Information</a>
                <a className="grid-item"href="xx">Contact us</a>
                <a className="grid-item"href="xx">Speed Test</a>
                <a className="grid-item"href="xx">Legal Notices</a>
                <a className="grid-item"href="xx">Only on Netflix</a>
      </div><br></br>
      <div className="dropdown">
                      <button className="dropdownbutton" onClick={displayLang}
                          >{lang}<span className="caret"></span>  </button>
                           <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <button onClick={()=>{setLang ("English")}} className="dropdown-lang1" >English</button><br/>
                          <button onClick={()=>{setLang("हिंदी")}} className="dropdown-lang2">हिंदी</button>
                          </ul>
        </div>
        <h3 className='nfind'>Netflix India</h3>
    </div>
  )
}

export default EndInfo