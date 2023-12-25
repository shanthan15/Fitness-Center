import React from 'react'
import reg from '../assets/reg.jpg';
import '../styles/register.css';

export default function Register() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${reg})`}}></div>

      <div className='rightSide'>
        <h1 className='reg'>Register</h1>

       <form id='contact-form' method='POST'>
       <label htmlFor='name'>Full Name</label>
       <input name='name' placeholder='Enter your fullname' type='text' />
       <label htmlFor='email'>Email Id</label>
       <input name='email' placeholder='Enter your email id' type='email' />
        <label htmlFor='text'>Contact Number</label>
       <input name='text' placeholder='Enter your contact number' type='text' />
      
       <button type='submit'>Register </button>
      
      
      </form>
       </div>
       </div>

  )
}
