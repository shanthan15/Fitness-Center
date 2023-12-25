import React from 'react'
import contact from '../assets/contact.jpg'
import '../styles/Contact.css';
export default function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${contact})`}}></div>

      <div className='rightSide1'>
        <h1>Contact Us</h1>

       <form id='contact-form' method='POST'>
       <label htmlFor='name'>Full Name</label>
       <input name='name' placeholder='Enter your fullname' type='text' />
       <label htmlFor='email'>Email Id</label>
       <input name='email' placeholder='Enter your email id' type='email' />
       <label htmlFor='message'>Message</label>
       <textarea rows={6} placeholder='Enter your message' name='message' required> </textarea>
       <button type='submit'>Send Message </button>
       


       </form>

      </div>

    </div>
  )
}
