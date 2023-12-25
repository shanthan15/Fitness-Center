import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Footer.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram} from '@fortawesome/free-brands-svg-icons';
import { faTwitter} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    
    <div className='footer'>
   <div className='socialMedia svg'>
   <a href='https://facebook.com'>
    <FontAwesomeIcon icon={faFacebook} />
   </a>

   <a href='https://Instagram.com'>
    <FontAwesomeIcon icon={faInstagram} />
   </a>

   <a href='https://Twitter.com'>
    <FontAwesomeIcon icon={faTwitter} />
   </a>

   <a href='https://Youtube.com'>
    <FontAwesomeIcon icon={faYoutube} />
   </a>

   


   </div>
   <p> &copy; 2023 FitnessCentre.com</p>
    </div>

    
  )
}
