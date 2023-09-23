import React from 'react'
import {Link} from 'react-router-dom'

import './car.css'
const Car = (props) => {
  return (
    <div className='parent'>
      <div className='maindiv'>
        <div className='image'>
          <img src={props.img} alt='display'/>
        </div>
        <div className='description'>
          <span className='title'>Car Name: {props.title}</span><br/>
          <span className='price'>Price : {props.price}</span><br/>
          <Link to=""><button type='button' className='btn'>Details</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Car;