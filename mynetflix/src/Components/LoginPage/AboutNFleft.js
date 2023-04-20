import React from 'react'
import "./AboutNFleft.css"
import Line from './Line'
function AboutNFleft(props) {

  return (
    <>
    <Line/>

    <div className='containerleft'>
        <span className='container1left'>
            <h1 className='head1'>{props.head1left}</h1>
            <h3 className='head2'>{props.head2left}</h3>
        </span>
        <span className='container2left'>
            <video className='image' style={props.style1}></video> 
        </span> 
    </div>
    </>
  )
}

export default AboutNFleft