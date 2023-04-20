import React from 'react'
import EndInfo from '../LoginPage/EndInfo'
import "./NewUser.css"
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase-config' 


function NewUser() {
  const [email, setEmail] = useState('');
  const [password,setPassword] = useState('')
  // const [username ,setUsername] = useState('')
  const navigate = useNavigate();
  const handleNavigate = (()=>{
    navigate('/signin');
  })
  const handleSubmit = (event) => {
    event.preventDefault();
    register()
  };
  

  const register = async () =>{
    try{
      const newUser= await createUserWithEmailAndPassword(auth, email , password )
      // .then((result)=>{result.user.updateProfile({displayName:username})})
      .then(
          ()=>{navigate('/home') })
        console.log(newUser);  
    } catch (error){
      alert('User Exists')
      console.log('error') 
    }
};


  return (
    <div className='register'>
        <div className='registerNav'>
              <div> <img className="nflogo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="nf-logo" />
              <button onClick={handleNavigate} className='signin-reg' >Sign In</button></div>
              <div className='smallLine'></div>
        </div>
        <form className='content-reg' onSubmit={handleSubmit}>
            <div className='contents-reg'>
              <h1 className="heading-register">Enter your Email and Password</h1>
              <h3 className='mini-head'>Just a few more steps and you're done!</h3>
              <h3 className='mini-head'>We hate paperwork, too.</h3>
              <input type="email" className='reg-email' placeholder=' 'value={email} onChange={(event) => setEmail(event.target.value)} required></input>
              <label className='emailPlaceholder'>Email or phone number</label>
              {/* <input type="name" className='reg-email' placeholder=' 'value={username} onChange={(event) => setUsername(event.target.value)} required></input>
              <label className='emailPlaceholder'>Username</label> */}
              <input type="password" className='reg-password'  placeholder=' 'value={password} onChange={(event) => setPassword(event.target.value)} required></input>
              <label className='passPlaceholder'>Enter Password</label>
              <button type="submit" className="reg-submit">Create Account</button>
            </div>
        </form>
        <EndInfo backgroundColor={"white"}/>
    </div>
  )
}

export default NewUser