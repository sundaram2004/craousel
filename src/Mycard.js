import React from 'react'
import './Mycard.css'


const Mycard = (props) => {
  return (
    <div className="mycard">
      <div className='imgka'>
        <img src={props.src} alt={props.alt}  >
        </img>
      </div>
      <div className='content123'>
        <div className='heading123'>{props.text}</div>
        <div className='text123'>
        {props.content}
        </div>
      </div>



    </div>


  )
}

export default Mycard