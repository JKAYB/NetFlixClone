import React from 'react'
import "./AboutNFright.css"
import Line from '../LoginPage/Line'
function AboutNFright(props) {
  return (
    <>
      <Line/>
    <div className='containerRight'>
        <div className='container1Right'>
            <video className='imageRight' style={props.style2}> </video>
        </div>
        <div className='container2Right'>
           <h1 className='head1Right'>{props.head1right}</h1>
           <h3 className='head2Right'>{props.head2right}</h3>
        </div>
        
    </div>
    </>
  )
}

export default AboutNFright