import React , { useState }from 'react'
import './LoginSubmit.css'
import {useNavigate} from 'react-router-dom'
function LoginSubmit() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/register')
    };
    
  return (
    <div>
        <form  className='userdata' onSubmit={handleSubmit}>
              <input type ="email" className="input" value={email} placeholder=" " 
                onChange={(event) => setEmail(event.target.value)} required/>
              <label className='placeholder'>Email address</label>
              
              <button type = "submit" className= "submit" > Get Started ></button>
        </form>
    </div>
  )
}

export default LoginSubmit