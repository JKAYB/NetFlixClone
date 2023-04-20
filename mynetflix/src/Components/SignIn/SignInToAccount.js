import React from 'react'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import './SignInToAccount.css'
import {signInWithEmailAndPassword } from 'firebase/auth'
import {auth} from '../../firebase-config' 

function SignInToAccount() {
    
    const[signinEmail,setSigninEmail] = useState('')
    const[signinPassword,setSigninPassword] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      signIn()
    };

    const signIn = async () =>{
        try{
         await signInWithEmailAndPassword(
            auth, signinEmail , signinPassword 
          );

          navigate('/home')

        } catch (error) {
          alert('Incorrect Email/Password')
        }
    }; 
  
    

  return (
    <div className='page2content'>
        <div className='fade3'>
        <a href="nil"><img className="navlogopage2" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
        alt="Netflix-logo" /></a>
        <div className='contentbox'>
            <form className='page2signin' onSubmit={handleSubmit}>
                <h3 className='page2head1'>Sign In</h3>
                <input type="email" className='inputpage2' placeholder=" " value={signinEmail} 
                onChange={(event) => setSigninEmail(event.target.value)} required/>
                <label className='placeholderpage2'>Email or phone number</label>
                <input type="password" className="password" placeholder=" " value={signinPassword}
                 onChange={(event) => setSigninPassword(event.target.value)} required/>
                <label className='passwordplaceholder'>Enter Password</label>
                <button type="submit" className='signinacc' >Sign In </button>
                <h3 className='headReturn'>New to Netflix?<a className='return' href="/"> Sign up now.</a></h3>
                <h3 className='recaptcha'>This page is protected by Google reCAPTCHA to <br/> ensure you're not a bot.</h3>
            </form>
        </div>
        <div className='dark'>
        <p className='contact-page2'>Questions? Call<a className='contactnum-page2' href=' xxxxxx'> 000-800-919-1694</a></p>
        <div className='grid-container-page2'>

                <a className="grid-item" href="xx">FAQ</a>
                <a className="grid-item"href="xx">Help Centre</a>
                <a className="grid-item"href="xx">Terms of Use</a>
                <a className="grid-item"href="xx">Privacy</a>
                <a className="grid-item"href="xx">Cookie Preferences</a>
                <a className="grid-item"href="xx">Corporate Information</a>
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default SignInToAccount