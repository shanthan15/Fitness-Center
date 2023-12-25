import React from 'react'
import BannerImage from '../assets/gym.jpg';
import { Link } from "react-router-dom";
import "../styles/home.css";

export default function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
     <div className='headerContainer1'>
     
    <h1><a href='/' className='logo'>Fitness<span className='red'> Centre</span></a></h1>

      
<p>Nothing but <span className='red'>GAINS</span> here.</p>

      
      <Link to={"/Register"}>

      
      <button>JOIN WITH US</button>
      </Link>


</div>

    </div>
    
  );
}
