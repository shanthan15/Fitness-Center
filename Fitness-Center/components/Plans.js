import React from 'react'
import '../styles/Plans.css';
import about3 from '../assets/about3.jpg';

const data = [
  { name: "Anom", age: 19, gender: "Male" },
  { name: "Megha", age: 19, gender: "Female" },
  { name: "Subham", age: 25, gender: "Male" },
]

export default function plans() {
  return (
    <div className='about1'>
      <div className='about1Top' style={{backgroundImage:`url(${about3})`}}></div>
    <div className='plan'>
       
    </div>
    </div>
  )
}



